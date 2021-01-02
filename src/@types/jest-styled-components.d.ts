import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface asymmetricMatcher {
      $$typeof: symbol
      // eslint-disable-next-line @typescript-eslint/ban-@types
      sample?: string | RegExp | object | Array<never> | Function
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined

    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>
