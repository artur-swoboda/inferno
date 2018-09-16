import { ChildFlags, VNodeFlags } from 'inferno-vnode-flags';
import {
  combineFrom,
  isArray,
  isFunction,
  isInvalid,
  isNull,
  isNullOrUndef,
  isObject,
  isString,
  isStringOrNumber,
  isUndefined,
  throwError
} from 'inferno-shared';
import { validateVNodeElementChildren } from './validate';
import { Component } from './component';
import { Fragment } from './../DOM/utils/common';

const keyPrefix = '$';

export interface VNode<P = {}> {
  children: InfernoChildren;
  childFlags: ChildFlags;
  dom: Element | null;
  className: string | null | undefined;
  flags: VNodeFlags;
  isValidated?: boolean;
  key: null | number | string;
  props: Props<P> & P | null;
  ref: any;
  type: any;
}
export interface RefObject<T> {
  readonly current: T | null;
}
export type InfernoInput = VNode | null;
export type Ref<T = Element> = { bivarianceHack(instance: T | null): any }['bivarianceHack'] | RefObject<T>;
export type InfernoChildren =
  | Element
  | string
  | number
  | boolean
  | undefined
  | VNode
  | Array<Element | boolean | string | number | VNode | null | undefined>
  | null;

export interface ForwardRef {
  render: Function;
}

export interface Props<P, T = Element> extends Refs<P> {
  children?: InfernoChildren;
  ref?: Ref<T> | Refs<P> | null;
  key?: any;
  className?: string;
}

export interface Refs<P> {
  onComponentDidMount?: (domNode: Element, nextProps: P) => void;
  onComponentWillMount?(): void;
  onComponentShouldUpdate?(lastProps: P, nextProps: P): boolean;
  onComponentWillUpdate?(lastProps: P, nextProps: P): void;
  onComponentDidUpdate?(lastProps: P, nextProps: P): void;
  onComponentWillUnmount?(domNode: Element): void;
}

function getVNode(childFlags: ChildFlags, children, className: string | null | undefined, flags: VNodeFlags, key, props, ref, type): VNode {
  if (process.env.NODE_ENV !== 'production') {
    return {
      childFlags,
      children,
      className,
      dom: null,
      flags,
      isValidated: false,
      key: key === void 0 ? null : key,
      props: props === void 0 ? null : props,
      ref: ref === void 0 ? null : ref,
      type
    };
  }

  return {
    childFlags,
    children,
    className,
    dom: null,
    flags,
    key: key === void 0 ? null : key,
    props: props === void 0 ? null : props,
    ref: ref === void 0 ? null : ref,
    type
  };
}

export function createVNode<P>(
  flags: VNodeFlags,
  type: string,
  className?: string | null,
  children?: InfernoChildren,
  childFlags?: ChildFlags,
  props?: Props<P> & P | null,
  key?: string | number | null,
  ref?: Ref | Refs<P> | null
): VNode {
  if (process.env.NODE_ENV !== 'production') {
    if (flags & VNodeFlags.Component) {
      throwError('Creating Component vNodes using createVNode is not allowed. Use Inferno.createComponentVNode method.');
    }
  }
  const childFlag = childFlags === void 0 ? ChildFlags.HasInvalidChildren : childFlags;
  const vNode = getVNode(childFlag, children, className, flags, key, props, ref, type);

  const optsVNode = options.createVNode;

  if (typeof optsVNode === 'function') {
    optsVNode(vNode);
  }

  if (childFlag === ChildFlags.UnknownChildren) {
    normalizeChildren(vNode, vNode.children);
  }

  if (process.env.NODE_ENV !== 'production') {
    validateVNodeElementChildren(vNode);
  }

  return vNode;
}

export function createComponentVNode<P>(
  flags: VNodeFlags,
  type: Function | Component<any, any> | ForwardRef,
  props?: Props<P> & P | null,
  key?: null | string | number,
  ref?: Ref | Refs<P> | null
) {
  if (process.env.NODE_ENV !== 'production') {
    if (flags & VNodeFlags.HtmlElement) {
      throwError('Creating element vNodes using createComponentVNode is not allowed. Use Inferno.createVNode method.');
    }
  }

  if ((flags & VNodeFlags.ComponentUnknown) !== 0) {
    if (isObject(type)) {
      flags = VNodeFlags.ForwardRef | VNodeFlags.ComponentFunction;
      type = (type as ForwardRef).render;
    } else {
      flags = (type as any).prototype && isFunction((type as any).prototype.render) ? VNodeFlags.ComponentClass : VNodeFlags.ComponentFunction;
    }
  }

  // set default props
  const defaultProps = (type as any).defaultProps;

  if (!isNullOrUndef(defaultProps)) {
    if (!props) {
      (props as any) = {}; // Props can be referenced and modified at application level so always create new object
    }
    for (const prop in defaultProps) {
      if (isUndefined(props![prop])) {
        props![prop] = defaultProps[prop];
      }
    }
  }

  if ((flags & VNodeFlags.ComponentFunction) > 0 && (flags & VNodeFlags.ForwardRef) === 0) {
    const defaultHooks = (type as any).defaultHooks;

    if (!isNullOrUndef(defaultHooks)) {
      if (!ref) {
        // As ref cannot be referenced from application level, we can use the same refs object
        ref = defaultHooks;
      } else {
        for (const prop in defaultHooks) {
          if (isUndefined(ref[prop])) {
            ref[prop] = defaultHooks[prop];
          }
        }
      }
    }
  }

  const vNode = getVNode(ChildFlags.HasInvalidChildren, null, null, flags, key, props, ref, type);
  const optsVNode = options.createVNode;

  if (isFunction(optsVNode)) {
    optsVNode(vNode);
  }

  return vNode;
}

export function createTextVNode(text?: string | number, key?: string | number | null): VNode {
  return getVNode(ChildFlags.HasInvalidChildren, isNullOrUndef(text) ? '' : text, null, VNodeFlags.Text, key, null, null, null);
}

export function createFragment(children: any, childFlags: ChildFlags, key?: string | number | null): VNode {
  const fragment = createVNode(VNodeFlags.Fragment, VNodeFlags.Fragment as any, null, children, childFlags, null, key, null);

  switch (fragment.childFlags) {
    case ChildFlags.HasInvalidChildren:
      fragment.children = createVoidVNode();
      fragment.childFlags = ChildFlags.HasVNodeChildren;
      break;
    case ChildFlags.HasTextChildren:
      fragment.children = [createTextVNode(children)];
      fragment.childFlags = ChildFlags.HasNonKeyedChildren;
      break;
    default:
      break;
  }

  return fragment;
}

export function normalizeProps(vNode) {
  const props = vNode.props;

  if (props) {
    const flags = vNode.flags;

    if (flags & VNodeFlags.Element) {
      if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
        normalizeChildren(vNode, props.children);
      }
      if (props.className !== void 0) {
        vNode.className = props.className || null;
        props.className = undefined;
      }
    }
    if (props.key !== void 0) {
      vNode.key = props.key;
      props.key = undefined;
    }
    if (props.ref !== void 0) {
      if (flags & VNodeFlags.ComponentFunction) {
        vNode.ref = combineFrom(vNode.ref, props.ref);
      } else {
        vNode.ref = props.ref as any;
      }

      props.ref = undefined;
    }
  }

  return vNode;
}

export function directClone(vNodeToClone: VNode): VNode {
  let newVNode;
  const flags = vNodeToClone.flags;

  if (flags & VNodeFlags.Component) {
    let props;
    const propsToClone = vNodeToClone.props;

    if (!isNull(propsToClone)) {
      props = {};
      for (const key in propsToClone) {
        props[key] = propsToClone[key];
      }
    }
    newVNode = createComponentVNode(flags, vNodeToClone.type, props, vNodeToClone.key, vNodeToClone.ref);
  } else if (flags & VNodeFlags.Element) {
    newVNode = createVNode(
      flags,
      vNodeToClone.type,
      vNodeToClone.className,
      vNodeToClone.children,
      vNodeToClone.childFlags,
      vNodeToClone.props,
      vNodeToClone.key,
      vNodeToClone.ref
    );
  } else if (flags & VNodeFlags.Text) {
    newVNode = createTextVNode(vNodeToClone.children as string, vNodeToClone.key);
  } else if (flags & VNodeFlags.Portal) {
    newVNode = createPortal(vNodeToClone.children, vNodeToClone.ref);
  } else if (flags & VNodeFlags.Fragment) {
    newVNode = createFragment(vNodeToClone.children as any[], vNodeToClone.childFlags, vNodeToClone.key);
  }

  return newVNode;
}

export function createVoidVNode(): VNode {
  return createTextVNode('', null);
}

export function createPortal(children, container) {
  return createVNode(
    VNodeFlags.Portal,
    VNodeFlags.Portal as any,
    null,
    children,
    ChildFlags.UnknownChildren,
    null,
    isInvalid(children) ? null : children.key,
    container
  );
}

export function _normalizeVNodes(nodes: any[], result: VNode[], index: number, currentKey: string) {
  for (const len = nodes.length; index < len; index++) {
    let n = nodes[index];

    if (!isInvalid(n)) {
      const newKey: string = currentKey + keyPrefix + index;

      if (isArray(n)) {
        _normalizeVNodes(n, result, 0, newKey);
      } else {
        if (isStringOrNumber(n)) {
          n = createTextVNode(n, newKey);
        } else {
          const oldKey = n.key;
          const isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;

          if (n.flags & VNodeFlags.InUse || isPrefixedKey) {
            n = directClone(n);
          }
          if (isNull(oldKey) || isPrefixedKey) {
            n.key = newKey;
          } else {
            n.key = currentKey + oldKey;
          }
        }

        result.push(n);
      }
    }
  }
}

export function getFlagsForElementVnode(type: string): VNodeFlags {
  switch (type) {
    case 'svg':
      return VNodeFlags.SvgElement;
    case 'input':
      return VNodeFlags.InputElement;
    case 'select':
      return VNodeFlags.SelectElement;
    case 'textarea':
      return VNodeFlags.TextareaElement;
    case Fragment:
      return VNodeFlags.Fragment;
    default:
      return VNodeFlags.HtmlElement;
  }
}

export function normalizeChildren(vNode: VNode, children) {
  let newChildren: any;
  let newChildFlags: number = ChildFlags.HasInvalidChildren;

  // Don't change children to match strict equal (===) true in patching
  if (isInvalid(children)) {
    newChildren = children;
  } else if (isStringOrNumber(children)) {
    newChildFlags = ChildFlags.HasTextChildren;
    newChildren = children;
  } else if (isArray(children)) {
    const len = children.length;

    if (len === 0) {
      newChildren = null;
      newChildFlags = ChildFlags.HasInvalidChildren;
    } else {
      // we assign $ which basically means we've flagged this array for future note
      // if it comes back again, we need to clone it, as people are using it
      // in an immutable way
      // tslint:disable-next-line
      if (Object.isFrozen(children) || children['$'] === true) {
        children = children.slice();
      }

      newChildFlags = ChildFlags.HasKeyedChildren;

      for (let i = 0; i < len; i++) {
        let n = children[i];

        if (isInvalid(n) || isArray(n)) {
          newChildren = newChildren || children.slice(0, i);

          _normalizeVNodes(children, newChildren, i, '');
          break;
        } else if (isStringOrNumber(n)) {
          newChildren = newChildren || children.slice(0, i);
          newChildren.push(createTextVNode(n, keyPrefix + i));
        } else {
          const key = n.key;
          const needsCloning = (n.flags & VNodeFlags.InUse) > 0;
          const isNullKey = isNull(key);
          const isPrefixed = !isNullKey && isString(key) && key[0] === keyPrefix;

          if (needsCloning || isNullKey || isPrefixed) {
            newChildren = newChildren || children.slice(0, i);
            if (needsCloning || isPrefixed) {
              n = directClone(n);
            }
            if (isNullKey || isPrefixed) {
              n.key = keyPrefix + i;
            }
            newChildren.push(n);
          } else if (newChildren) {
            newChildren.push(n);
          }
        }
      }
      newChildren = newChildren || children;
      newChildren.$ = true;
    }
  } else {
    newChildren = children;

    if (children.flags & VNodeFlags.InUse) {
      newChildren = directClone(children as VNode);
    }
    newChildFlags = ChildFlags.HasVNodeChildren;
  }

  vNode.children = newChildren;
  vNode.childFlags = newChildFlags;

  if (process.env.NODE_ENV !== 'production') {
    validateVNodeElementChildren(vNode);
  }

  return vNode;
}

export const options: {
  createVNode: null | Function;
  renderComplete: null | Function;
} = {
  createVNode: null,
  renderComplete: null
};
