import { useRef, useEffect } from 'react'

/**
 * useCombinedRefs creates a ref from refs that listen
 * to the value of the returned ref.
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