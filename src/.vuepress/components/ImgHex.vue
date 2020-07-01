<template>
  <svg :viewBox="`0 0 70 61`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern :id="id" patternUnits="userSpaceOnUse" width="100%" height="100%" x="0" y="0">
        <image :xlink:href="src" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMinYMin slice" />
      </pattern>
    </defs>
    <path fill-rule="evenodd" :fill="`url(#${id})`" clip-rule="evenodd" d="M69.9391 30.5994L52.4594 60.8394H17.5407L0.0608826 30.5994L17.5407 0.359375L52.4594 0.359377L69.9391 30.5994Z"/>
  </svg>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  },
  data: function() {
    return {
      id: Math.random()
    };
  }
};
</script>