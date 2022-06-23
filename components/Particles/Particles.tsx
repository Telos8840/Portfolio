import ParticlesJS from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { createStyles } from '@mantine/core';

// https://github.com/Wufe/react-particles-js/blob/master/README.md

// https://github.com/matteobruni/tsparticles/issues/1277
// https://github.com/malerba118/react-particle-image
const useStyles = createStyles((theme) => ({
  particles: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

// TODO: IDEA - build background with particle js and use metal horns as emoji with
// BTBAM background similar to http://www.pascalvangemert.nl/ https://riccardozanutta.com/

const Particles = () => {
  const { classes } = useStyles();

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesConfig = {
    fullScreen: { enable: false, zIndex: 0 },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
          speed: 3,
        },
      },
    },
    particles: {
      color: {
        value: '#ff0000',
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      lineLinked: {
        blink: false,
        color: 'random',
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.3,
        width: 0.5,
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: false,
          area: 2000,
        },
        limit: 0,
        value: 200,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 2,
          sync: false,
        },
        random: false,
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false,
        },
        random: true,
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: 'rgba(255,255,255,0.2)',
        lineWidth: 0.3,
      },
      move: {
        radius: 5,
      },
      inlineArrangement: 'equidistant',
      scale: 0.4,
      type: 'inline',
      url: '/images/react-logo.svg',
    },
  };

  return (
    <ParticlesJS
      id="tsparticles"
      className={classes.particles}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};
// First React logo pass
// {
//   detectRetina: false,
//       fpsLimit: 60,
//     fullScreen: {
//   enable: false,
// },
//   interactivity: {
//     detectsOn: 'canvas',
//         events: {
//       onHover: {
//         enable: true,
//             mode: 'bubble',
//       },
//       resize: true,
//     },
//     modes: {
//       bubble: {
//         distance: 40,
//             duration: 2,
//             opacity: 8,
//             size: 6,
//             speed: 3,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: '#ff0000',
//           animation: {
//         enable: true,
//             speed: 20,
//             sync: true,
//       },
//     },
//     lineLinked: {
//       blink: false,
//           color: 'random',
//           consent: false,
//           distance: 30,
//           enable: true,
//           opacity: 0.3,
//           width: 0.5,
//     },
//     move: {
//       attract: {
//         enable: false,
//             rotate: {
//           x: 600,
//               y: 1200,
//         },
//       },
//       bounce: false,
//           direction: 'none',
//           enable: true,
//           outMode: 'bounce',
//           random: true,
//           speed: 0.5,
//           straight: false,
//     },
//     number: {
//       density: {
//         enable: false,
//             area: 2000,
//       },
//       limit: 0,
//           value: 200,
//     },
//     opacity: {
//       animation: {
//         enable: true,
//             minimumValue: 0.05,
//             speed: 2,
//             sync: false,
//       },
//       random: false,
//           value: 1,
//     },
//     shape: {
//       type: 'circle',
//     },
//     size: {
//       animation: {
//         enable: false,
//             minimumValue: 0.1,
//             speed: 40,
//             sync: false,
//       },
//       random: true,
//           value: 1,
//     },
//   },
//   polygon: {
//     draw: {
//       enable: true,
//           stroke: {
//         color: 'rgba(255,255,255,0.2)',
//             width: 0.3,
//       },
//     },
//     move: {
//       radius: 10,
//     },
//     inline: {
//       arrangement: 'equidistant',
//     },
//     scale: 1,
//         type: 'inline',
//         url: '/images/react-logo.svg',
//   },
// }

export default Particles;

// {
//   "background": {
//   "color": {
//     "value": "#000000"
//   },
//   "position": "50% 50%",
//       "repeat": "no-repeat",
//       "size": "cover"
// },
//   "fullScreen": {
//   "zIndex": 1
// },
//   "detectRetina": false,
//     "interactivity": {
//   "events": {
//     "onClick": {
//       "mode": "push"
//     },
//     "onDiv": {
//       "selectors": "#repulse-div",
//           "mode": "repulse"
//     },
//     "onHover": {
//       "enable": true,
//           "mode": "bubble"
//     }
//   },
//   "modes": {
//     "bubble": {
//       "distance": 40,
//           "duration": 2,
//           "opacity": 8,
//           "size": 6,
//           "divs": {
//         "distance": 200,
//             "duration": 0.4,
//             "mix": false,
//             "selectors": []
//       }
//     },
//     "grab": {
//       "distance": 400
//     },
//     "repulse": {
//       "divs": {
//         "distance": 200,
//             "duration": 0.4,
//             "factor": 100,
//             "speed": 1,
//             "maxSpeed": 50,
//             "easing": "ease-out-quad",
//             "selectors": []
//       }
//     },
//     "slow": {
//       "factor": 1,
//           "radius": 0
//     }
//   }
// },
//   "particles": {
//   "color": {
//     "value": "#ffffff"
//   },
//   "links": {
//     "color": {
//       "value": "#ffffff"
//     },
//     "distance": 30,
//         "enable": true,
//         "opacity": 0.4
//   },
//   "move": {
//     "attract": {
//       "rotate": {
//         "x": 600,
//             "y": 1200
//       }
//     },
//     "enable": true,
//         "path": {},
//     "outModes": {
//       "default": "bounce",
//           "bottom": "bounce",
//           "left": "bounce",
//           "right": "bounce",
//           "top": "bounce"
//     },
//     "speed": 1,
//         "spin": {}
//   },
//   "number": {
//     "density": {
//       "area": 2000
//     },
//     "value": 200
//   },
//   "opacity": {
//     "value": {
//       "min": 0.05,
//           "max": 0.4
//     },
//     "animation": {
//       "enable": true,
//           "minimumValue": 0.05
//     }
//   },
//   "size": {
//     "random": {
//       "enable": true
//     },
//     "value": 1,
//         "animation": {
//       "speed": 40,
//           "minimumValue": 0.1
//     }
//   }
// },
//   "polygon": {
//   "draw": {
//     "enable": true,
//         "stroke": {
//       "color": {
//         "value": "rgba(255,255,255,0.2)"
//       },
//       "width": 0.5,
//           "opacity": 0.2
//     }
//   },
//   "enable": true,
//       "inline": {
//     "arrangement": "one-per-point"
//   },
//   "move": {
//     "radius": 10,
//         "type": "path"
//   },
//   "scale": 0.5,
//       "type": "inline",
//       "url": "https://particles.js.org/images/smalldeer.svg"
// }
// }

// {
//   detectRetina: false,
//       fpsLimit: 60,
//     interactivity: {
//   detectsOn: "canvas",
//       events: {
//     onHover: {
//       enable: true,
//           mode: "bubble"
//     },
//     resize: true
//   },
//   modes: {
//     bubble: {
//       distance: 40,
//           duration: 2,
//           opacity: 8,
//           size: 6,
//           speed: 3
//     }
//   }
// },
//   particles: {
//     color: {
//       value: "#ff0000",
//           animation: {
//         enable: true,
//             speed: 20,
//             sync: true
//       }
//     },
//     lineLinked: {
//       blink: false,
//           color: "random",
//           consent: false,
//           distance: 30,
//           enable: true,
//           opacity: 0.3,
//           width: 0.5
//     },
//     move: {
//       attract: {
//         enable: false,
//             rotate: {
//           x: 600,
//               y: 1200
//         }
//       },
//       bounce: false,
//           direction: "none",
//           enable: true,
//           outMode: "bounce",
//           random: true,
//           speed: 0.5,
//           straight: false
//     },
//     number: {
//       density: {
//         enable: false,
//             area: 2000
//       },
//       limit: 0,
//           value: 200
//     },
//     opacity: {
//       animation: {
//         enable: true,
//             minimumValue: 0.05,
//             speed: 2,
//             sync: false
//       },
//       random: false,
//           value: 1
//     },
//     shape: {
//       type: "circle"
//     },
//     size: {
//       animation: {
//         enable: false,
//             minimumValue: 0.1,
//             speed: 40,
//             sync: false
//       },
//       random: true,
//           value: 1
//     }
//   },
//   polygon: {
//     draw: {
//       enable: true,
//           lineColor: "rgba(255,255,255,0.2)",
//           lineWidth: 0.3
//     },
//     move: {
//       radius: 10
//     },
//     inlineArrangement: "equidistant",
//         scale: 0.5,
//         type: "inline",
//         url: "https://particles.js.org/images/smalldeer.svg"
//   }
// }
