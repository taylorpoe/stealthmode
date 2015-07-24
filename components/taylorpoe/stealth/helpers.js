var contextSize = window.innerHeight

// <img id="fighter" src="{{BASE_URL}}/img/stealth.svg">

// 'style': {
//     'background': 'rgba(246, 133, 150, 0.3)',
// }


// var up = false;
// if (up) {
//     $state.set('illoPositionY', currentY-1);
// } else {
//     $state.set('illoPositionY', currentY+1);
// }
// if (Math.floor(Math.random() * 10) + 1 > 5) {
//     up = false;
// } else {
//     up = true;
// }


// '$lifecycle': {
//     'post-load': function($state, $famousNode){
//         var id = $famousNode.addComponent({    
//             onUpdate: function(time) {
//                 var currentY = $state.get('illoPositionY');
//                 $state.set('illoPositionY', currentY-1);
//                 $famousNode.requestUpdateOnNextTick(id);
//             }
//         });
//         $famousNode.requestUpdateOnNextTick(id);
//     }
// },

// '$lifecycle': {
//     'post-load': function ($state) {
//         $state.set('illoPositionY', $state.get('illoPositionY') - 50, {
//         duration: 1000,
//         curve: 'easeInEaseOut',
//         }).thenSet('illoPositionY', $state.get('illoPositionY') + 25, {
//             duration: 1000,
//             curve: 'easeInEaseOut'
//         });
//     }
// },