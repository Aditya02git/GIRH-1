import {React, useEffect} from 'react'

const License = () => {

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div>
        This is the page of license
    </div>
    </>
  )
}

export default License
