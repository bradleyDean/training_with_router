Template.strengthSelector.events({
    'click .hang_board': function(e){
        e.preventDefault();
        console.log('setting session var');
        Router.go('/strengthHangBoardForm');
    }
});
