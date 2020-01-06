addEventListener('load', function(e) {
    document.querySelector('#test').innerHTML = 'SID2';
});



new Vue({
    el: '#options',
    data: {
        selected: ''
    }
})

new Vue({
    el: '#multivue',
    data: {
        checkedNums: []
    }
})

new Vue({
    el: '#multi',
    data: {
        checkedNames: []
    }
})