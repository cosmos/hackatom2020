require('intersection-observer');

export default {
  inserted: function(el, binding) {
    let observer = new IntersectionObserver(onIntersection, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })
    observer.observe(el)
    function onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target)
          entry.target.src = binding.value
        }
      })
    }
  }
}