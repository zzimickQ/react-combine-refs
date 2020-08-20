import { useRef, useEffect } from 'react'

/**
 * useCombinedRefs creates a ref from refs that listen
 * to the value of the returned ref.
 * 
 * 
 * <code>
 * import React, { useRef } from 'react'
 * import useConbinedRef from 'react-combine-refs'
 * 
 * const Button = React.forwardRef((props, fRef) => {
 *  const cRef = useCombinedRef(fRef)
 * 
 *  // use cRef here ...
 * 
 *  const { children, ...otherProps } = props
 *  return <Button ref={cRef} {...otherProps}>{children}</Button>
 * })
 * 
 * function App() {
 *  const ref = useRef()
 *  
 *  // use ref here ...
 * 
 *  return (<div>
 *      <Button ref={ref}>Hello</Button>
 *  </div>)
 * } 
 * 
 * 
 * </code>
 * 
 * 
 * 
 * 
 * @param  {...React.Ref} refs references to be combined
 * @returns {React.Ref} the reference that contains all the passed refs
 */
function useCombinedRefs(...refs) {
    const masterRef = useRef()

    useEffect(() => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(masterRef.current)
                return
            }

            if (ref !== undefined) {
                ref.current = masterRef.current
                return
            }
        })
    }, [refs])

    return masterRef
}

export default useCombinedRefs