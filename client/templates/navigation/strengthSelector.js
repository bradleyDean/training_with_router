Template.strengthSelector.events({
    'click .hang_board': function(e){
        e.preventDefault();

        Router.go('/strengthHangBoardForm');
    }
});
