
FamousFramework.scene('taylorpoe:stealth', {
//+++++++++++++++++++++++++++BEHAVIORS++++++++++++++++++++++++++++
    behaviors: {
        '#background': {
            'style': {
                // 'background': 'blue',
                'perspective':'500px'
            },
            // 'camera': '5000px',
        },
        '#nav': {
            'size': function(navHeight){
                return [undefined, navHeight]
            },
            'align': [0, 0],
            'mount-point': [0, 0],
            'origin': [.5, .5],
            'style': {
                'background': 'rgba(18, 12, 24, 0.8)',
                'border-bottom': 'solid 1px black'
            }
        },
        '#logo': {
            'size': function(navHeight) {
                return [navHeight, navHeight]
            },
            'align': [0, .5],
            'mount-point': [0, .5],
            'origin': [.5, .5],
            'position': [10, 1],
            'rotation-z': function(logoRotation) {
                return logoRotation
            },
            'style': {
                // 'background': 'rgba(246, 133, 150, 0.3)',
                'border-radius': '50%',
                'background-image': 'url({{BASE_URL}}/img/logo.png)',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': '70%, 70%'
            }
        },
        // LIVES COUNTERS
        '#lives-container': {
            'size': function(holsterSize) {
                return [holsterSize, undefined]
            },
            'align': [.5, 0],
            'mount-point': [.5, 0],
            'position': [-10, 0]
        },
        '#red-lives-holster': {
            'size': function(holsterSize) {
                return [holsterSize/3, undefined]
            },
            // BUG WHERE ADDED ELEMENT WON'T SHOW UP in right location IF BACKGROUND DOESN'T EXIST
            'style': {
                'background': 'rgba(246, 133, 150, 0)',
            }
        },
        '#yellow-lives-holster': {
            'size': function(holsterSize) {
                return [holsterSize/3, undefined]
            },
            'position': function (holsterSize) {
                return [holsterSize/3, 0]
            },
            // 'style': {
            //     'background': 'rgba(246, 133, 150, 0.3)',
            // }
        },
        '#blue-lives-holster': {
            'size': function(holsterSize) {
                return [holsterSize/3, undefined]
            },
            'position': function (holsterSize) {
                return [(holsterSize/3)*2, 0]
            },
            // 'style': {
            //     'background': 'rgba(246, 133, 150, 0.3)',
            // }
        },
        '.red-life': {
            'size': [14, 21],
            'position-y': 7,
            // 'position-z': 2,
            '$repeat':function(livesB1){
                return livesB1
            },
            'position-x': function($index) {
                return 10 + $index * 23
            },
            'style': {
                'background-color': '#2b2333',
                'z-index': '2',
            },
        },
        '.yellow-life' : {
            'size': [14, 21],
            '$repeat':function(livesB2){
                return livesB2
            },
            'position-x': function($index) {
                return 10 + $index * 23
            },
            'position-y': 7,
            'style': {
                'background-color': '#2b2333',
                'z-index': '2',
            },
        },
        '.blue-life' : {
            'size': [14, 21],
            '$repeat':function(livesB3){
                return livesB3
            },
            'position-x': function($index) {
                return 10 + $index * 23
            },
            'position-y': 7,
            'style': {
                'background-color': '#2b2333',
                'z-index': '2',
            },
        },
        '.red-death' : {
            'size': [14, 21],
            '$repeat':function(deathsB1){
                return deathsB1
            },
            'position-x': function($index) {
                return 102 - $index * 23
            },
            'position-y': 7,
            // 'position-z': 1,
            'style': {
                'opacity': .4
            }
        },
        '.yellow-death' : {
            'size': [14, 21],
            '$repeat':function(deathsB2){
                return deathsB2
            },
            'position-x': function($index) {
                return 102 - $index * 23
            },
            'position-y': 7,
            'style': {
                'opacity': .4
            }
        },
        '.blue-death' : {
            'size': [14, 21],
            '$repeat':function(deathsB3){
                return deathsB3
            },
            'position-x': function($index) {
                return 102 - $index * 23
            },
            'position-y': 7,
            'style': {
                'opacity': .4
            }
        },
        // THE ILLUSTRATION
        '.equalize': {
            'align': [.5, .5],
            'mount-point': [.5, .5],
            'origin': [.5, .5],
        },
        '#full-illo': {
            'size': [371, 447],
            'position': function(illoPositionX, illoPositionY, navHeight){
                return [illoPositionX, illoPositionY + navHeight/2]
            },
            'position-z': 0,
            'rotation-z': 0,
            'rotation-x': 0,
            'rotation-y': 0,
            'align': [.5, .5],
            'mount-point': [.5, .5],
            'origin': [.5, .5],
            'style': {
                'background': 'transparent',
            }
        },
        '#stealth': {
            'size': [371, 197],
            'position-y': 125,
            '$if': function(stealthToggle) {
                return stealthToggle;
            }
        },
        '#rope-1': {
            'size': [35, 185],
            'position-x': -40,
            'position-y': 13,
            'position-z': -22,
            'origin': [1, 1],
            'opacity': function(opacityR1){
                return opacityR1
            },
            'style': {
                'background-color': 'transparent',
            },
            'scale': function(scaleValueR1) {
                return [scaleValueR1, scaleValueR1]
            },
            '$if': function(toggleB1) {
                return toggleB1;
            }
        },
        '#rope-2': {
            'size': [6, 216],
            'position-x': -20,
            'origin': [1, 1],
            'scale': function(scaleValueR2) {
                return [scaleValueR2, scaleValueR2]
            },
            'style': {
                'background-color': 'transparent',
            },
            'opacity': function(opacityR2) {
                return opacityR2
            },
            '$if': function(toggleB2) {
                return toggleB2;
            }
        },
        '#rope-3': {
            'size': [46, 194],
            'position-y': 11,
            'position-z': 20,
            'origin': [1, 1],
            'scale': function(scaleValueR3) {
                return [scaleValueR3, scaleValueR3]
            },
            'style': {
                'background-color': 'transparent',
                'z-index': '0',
            },
            'opacity': function(opacityR3) {
                return opacityR3
            },
            '$if': function(toggleB3) {
                return toggleB3;
            }
        },
        '#balloon-1': {
            'size': [91, 123],
            'position': [-67, -131],
            'position-z': -20,
            'origin': [1, 1],
            // 'style': {
            //     'background': 'rgba(246, 133, 150, 0.3)',
            // },
            'scale': function(scaleValueB1) {
                return [scaleValueB1, scaleValueB1]
            },
            'opacity': function(opacityB1) {
                return opacityB1
            },
            '$if': function(toggleB1) {
                return toggleB1;
            }
        },
        '#balloon-2': {
            'size': [91, 122],
            'position': [-19, -162],
            'position-z': 2,
            'scale': function(scaleValueB2) {
                return [scaleValueB2, scaleValueB2]
            },
            'opacity': function(opacityB2) {
                return opacityB2
            },
            '$if': function(toggleB2) {
                return toggleB2;
            }
        },
        '#balloon-3': {
            'size': [92, 124],
            'position': [35, -141],
            'position-z': 21,
            'style': {
                'z-index': '2',
            },
            'scale': function(scaleValueB3) {
                return [scaleValueB3, scaleValueB3]
            },
            'opacity': function(opacityB3) {
                return opacityB3
            },
            '$if': function(toggleB3) {
                return toggleB3;
            }
        },
        '.balloons':  {
            'align': [.5, .5],
            'mount-point': [.5, .5],
            'origin': [.5, .5],
            'style': {
                'cursor': 'crosshair',
                'border-radius': '40%',
            }
        }
    },
//+++++++++++++++++++++++++++EVENTS++++++++++++++++++++++++++++
    events: {
        '$lifecycle': {
            'post-load': function levitate($state) {
                $state.set('illoPositionY', $state.get('illoPositionY') - 50, {
                duration: 1000,
                curve: 'easeInEaseOut',
                }).thenSet('illoPositionY', $state.get('illoPositionY') + 25, {
                    duration: 1000,
                    curve: 'easeInEaseOut'
                });
            }
        },
        '#logo': {
            'mouseover': function($state) {
                $state.set('logoRotation', -Math.PI, {
                    duration: 350,
                    curve: 'easeOutBounce',
                });
            },
            'mouseout': function($state) {
                $state.set('logoRotation', -Math.PI*2, {
                    duration: 350,
                    curve: 'easeOutBounce',
                });
            },
        },
        '#balloon-1': {
            'mouseenter': function($state) {
                $state.set('scaleValueB1', 1.1, {
                     duration: 150,
                     curve: 'easeOutBounce',
                 });
            },
            'mouseout': function($state) {
                $state.set('scaleValueB1', 1, {
                    duration: 350,
                    curve: 'ease',
                });
            },
            'click': function($timelines, $state) {
                $timelines.get('b1Shot').start({ duration: 500 });
                $timelines.get('lostLeft').start({ duration: 500 });
                var livesB1 = $state.get('livesB1');
                var livesB2 = $state.get('livesB2');
                var livesB3 = $state.get('livesB3');
                // var deaths = $state.get('deathsB1');
                if (livesB1.length >= 2) {
                    livesB1.pop();
                    // deaths.push(1);
                    $state.set('livesB1', livesB1);
                } else {
                    $state.set('toggleB1', false);
                    $state.set('livesB1', []);
                    if (livesB2.length == 0 && livesB2.length == 0) {
                        $timelines.get('stealthFall').start({ duration: 2200 });
                        
                    };
                };
                // $state.set('deathsB1', deaths);
                // $state.set('stealthToggle', false)
                //     .thenSet('stealthToggle', true);
            }
        },
        '#balloon-2': {
            'mouseenter': function($state) {
                $state.set('scaleValueB2', 1.1, {
                 duration: 150,
                 curve: 'easeOutBounce',
                 });
            },
            'mouseout': function($state) {
                $state.set('scaleValueB2', 1, {
                    duration: 350,
                    curve: 'ease',
                });
            },
            'click': function($timelines, $state) {
                $timelines.get('b2Shot').start({ duration: 500 });
                $timelines.get('lostMiddle').start({ duration: 500 });
                var livesB1 = $state.get('livesB1');
                var livesB2 = $state.get('livesB2');
                var livesB3 = $state.get('livesB3');
                if (livesB2.length >= 2) {
                    livesB2.pop();
                    $state.set('livesB2', livesB2);
                } else {
                    $state.set('toggleB2', false);
                    $state.set('livesB2', []);
                    if (livesB1.length == 0 && livesB3.length == 0) {
                        $timelines.get('stealthFall').start({ duration: 2200 });
                    };
                };
            }
        },
        '#balloon-3': {
            'mouseenter': function($state) {
                $state.set('scaleValueB3', 1.1, {
                 duration: 150,
                 curve: 'easeOutBounce',
                 });
            },
            'mouseout': function($state) {
                $state.set('scaleValueB3', 1, {
                    duration: 350,
                    curve: 'ease',
                });
            },
            'click': function($timelines, $state) {
                $timelines.get('b3Shot').start({ duration: 500 });
                $timelines.get('lostRight').start({ duration: 500 });
                var livesB1 = $state.get('livesB1');
                var livesB2 = $state.get('livesB2');
                var livesB3 = $state.get('livesB3');
                if (livesB3.length >= 2) {
                    livesB3.pop();
                    $state.set('livesB3', livesB3);
                } else {
                    $state.set('toggleB3', false);
                    $state.set('livesB3', []);
                    if (livesB1.length == 0 && livesB2.length == 0) {
                        $timelines.get('stealthFall').start({ duration: 2200 });
                    };
                };
            }
        }
    },
//+++++++++++++++++++++++++++STATES++++++++++++++++++++++++++++
    states: {
        navHeight: 32,
        illoPositionX: 0,
        illoPositionY: 0,
        logoRotation: 0,
        logoScale: 1,

        // Livesstuffs
        holsterSize: 400,
        stealthToggle: true,

        // Balloon & Rope 1
        livesB1: [1, 2, 3, 4, 5],
        deathsB1: [1, 2, 3, 4, 5],
        scaleValueB1: 1,
        opacityB1: 1,
        toggleB1: true,
        scaleValueR1: 1,
        opacityR1: 1,

        //Balloon & Rope 2
        livesB2: [1, 2, 3, 4, 5],
        deathsB2: [1, 2, 3, 4, 5],
        scaleValueB2: 1,
        opacityB2: 1,
        toggleB2: true,
        scaleValueR2: 1,
        opacityR2: 1,

        //Balloon & Rope 3
        livesB3: [1, 2, 3, 4, 5],
        deathsB3: [1, 2, 3, 4, 5],
        deathOpacityB3: .1,
        scaleValueB3: 1,
        opacityB3: 1,
        toggleB3: true,
        scaleValueR3: 1,
        opacityR3: 1
    },
    tree: 'stealth.html'
}).config({
    includes: [
        'stealth.css'
    ]

//++++++++++++++++++++++++++++TIMELINES++++++++++++++++++++++++++++
}).timelines({
    'b1Shot': {
        '#balloon-1': {
            'scale': {
                '0%':   { value: [1,1], curve: 'quintIn' },
                '48%':  { value: [5, 5], curve: 'easeInEaseOut' },
                '49%':  { value: [.1,.1], curve: 'linear' },
                '100%':  { value: [1, 1], curve: 'easeInEaseOut' }
            },
            'opacity': {
                '0%':   { value: 1, curve: 'linear' },
                '45%':  { value: 0, curve: 'linear' },
                '50%':  { value: 0, curve: 'linear' },
                '100%':  { value: 1, curve: 'linear' }
            },
            'position-y': {
                '49%':  { value: -131, curve: 'linear' },
                '50%':    { value: 131, curve: 'linear' },
                '100%':  { value: -131, curve: 'linear' }
            }
        },
        '#rope-1': {
            'opacity': {
                '0%':   { value: 1, curve: 'linear' },
                '40%':  { value: 0, curve: 'linear' },
                '60%':  { value: 0, curve: 'linear' },
                '100%':  { value: 1, curve: 'linear' }
            },
            'scale': {
                '0%':   { value: [.1,.1], curve: 'linear' },
                '60%':   { value: [.1,.1], curve: 'quintIn' },
                '100%':  { value: [1, 1], curve: 'linear' }
            }
        }
    },
    'b2Shot': {
        '#balloon-2': {
            'scale': {
                '0%':   { value: [1,1], curve: 'quintIn' },
                '48%':  { value: [5, 5], curve: 'easeInEaseOut' },
                '49%':  { value: [.1,.1], curve: 'linear' },
                '100%':  { value: [1, 1], curve: 'easeInEaseOut' }
            },
            'opacity': {
                '0%':   { value: 1, curve: 'linear' },
                '45%':  { value: 0, curve: 'linear' },
                '50%':  { value: 0, curve: 'linear' },
                '100%':  { value: 1, curve: 'linear' }
            },
            'position-y': {
                '49%':  { value: -161, curve: 'linear' },
                '50%':    { value: 161, curve: 'linear' },
                '100%':  { value: -161, curve: 'linear' }
            }
        },
        '#rope-2': {
            'opacity': {
                '0%':   { value: 1, curve: 'linear' },
                '40%':  { value: 0, curve: 'linear' },
                '60%':  { value: 0, curve: 'linear' },
                '100%':  { value: 1, curve: 'linear' }
            },
            'scale': {
                '0%':   { value: [.1,.1], curve: 'linear' },
                '60%':   { value: [.1,.1], curve: 'quintIn' },
                '100%':  { value: [1, 1], curve: 'linear' }
            }
        }
    },
    'b3Shot': {
        '#balloon-3': {
            'scale': {
                '0%':   { value: [1,1], curve: 'quintIn' },
                '48%':  { value: [5, 5], curve: 'easeInEaseOut' },
                '49%':  { value: [.1,.1], curve: 'linear' },
                '100%':  { value: [1, 1], curve: 'easeInEaseOut' }
            },
            'opacity': {
                '0%':   { value: 1, curve: 'linear' },
                '45%':  { value: 0, curve: 'linear' },
                '50%':  { value: 0, curve: 'linear' },
                '100%':  { value: 1, curve: 'linear' }
            },
            'position-y': {
                '49%':  { value: -141, curve: 'linear' },
                '50%':    { value: 141, curve: 'linear' },
                '100%':  { value: -141, curve: 'linear' }
            }
        },
        '#rope-3': {
            'opacity': {
                '0%':   { value: 1, curve: 'linear' },
                '40%':  { value: 0, curve: 'linear' },
                '60%':  { value: 0, curve: 'linear' },
                '100%':  { value: 1, curve: 'linear' }
            },
            'scale': {
                '0%':   { value: [.1,.1], curve: 'linear' },
                '60%':   { value: [.1,.1], curve: 'quintIn' },
                '100%':  { value: [1, 1], curve: 'linear' }
            }
        }
    },
    'lostLeft': {
        '#full-illo': {
            'rotation-y': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: Math.PI/5, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' },
            },
            'rotation-x': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: -Math.PI/5, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' },
            },
            'rotation-z': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: -Math.PI/8, curve: 'easeOutBounce' },
                '100%':   { value: -Math.PI/32, curve: 'easeOutBounce' }
            }
        },
        '#stealth': {
            'rotation-z': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: -Math.PI/6, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' }
            }
        }
    },
    'lostRight': {
        '#full-illo': {
            'rotation-y': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: -Math.PI/5, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' },
            },
            'rotation-x': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: -Math.PI/4, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' },
            },
            'rotation-z': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: Math.PI/8, curve: 'easeOutBounce' },
                '100%':   { value: Math.PI/50, curve: 'easeOutBounce' }
            }
        },
        '#stealth': {
            'rotation-z': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: Math.PI/6, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' }
            }
        }
    },
    'lostMiddle': {
        '#full-illo': {
            'rotation-x': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: -Math.PI/4, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' },
            },
            'rotation-z': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '30%':  { value: Math.PI/30, curve: 'easeOutBounce' },
                '60%':   { value: -Math.PI/30, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' }
            }
        },
        '#stealth': {
            'rotation-z': {
                '0%':   { value: 0, curve: 'easeOutBounce' },
                '40%':  { value: -Math.PI/12, curve: 'easeOutBounce' },
                '100%':   { value: 0, curve: 'easeOutBounce' }
            }
        }
    },
    'stealthFall' : {
        '#stealth': {
            'position-y': {
                '0%':   { value: 125, curve: 'easeInEaseOut' },
                '70%': { value: 1130, curve: 'easeInEaseOut'},
                '100%':   { value: 2200, curve: 'easeInEaseOut' }
            },
            'position-x': {
                '0%':   { value: 0, curve: 'easeInEaseOut' },
                '50%':   { value: -180, curve: 'easeInEaseOut' },
                '70%':   { value: -180, curve: 'easeInEaseOut' },
                '100%':   { value: -220, curve: 'easeInEaseOut' }
            },
            'rotation-z': {
                '0%':   { value: 0, curve: 'easeInEaseOut' },
                '20%':   { value: -Math.PI*.1, curve: 'easeInEaseOut' },
                '34%':   { value: -Math.PI*.1, curve: 'easeInEaseOut' },
                '60%':  { value: Math.PI*2, curve: 'easeOutBounce' },
                '80%':   { value: Math.PI*1.8, curve: 'easeInEaseOut' }
            }
        },
        '#full-illo': {
            'position-z': {
                '0%':   { value: 0, curve: 'easeInEaseOut' },
                '100%':   { value: -2000, curve: 'easeInEaseOut' }
            },
            'position-y': {
                '0%':   { value: 0, curve: 'easeInEaseOut' },
                '100%':   { value: -1000, curve: 'easeInEaseOut' }
            },
            'rotation-x': {
                '0%':   { value: 0, curve: 'easeInEaseOut' },
                '100%':   { value: Math.PI*.2, curve: 'easeInEaseOut' }
            },
            'rotation-y': {
                '0%':   { value: 0, curve: 'easeInEaseOut' },
                '100%':   { value: Math.PI*.2, curve: 'easeInEaseOut' }
            },
            'opacity': {
                '95%':  { value: 1, curve: 'linear'},
                '100%':  { value: 0, curve: 'linear'}
            }
        }
    }
});
