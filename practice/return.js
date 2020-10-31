// return function to function 

function host() {
    console.log('i am host function');

    function child() {
        console.log('i am achild');
    }
    return child
};
host()();
