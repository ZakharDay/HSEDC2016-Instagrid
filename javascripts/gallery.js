$(function() {
  var state = {
    collections: $('.collection').length,
    currentCollection: 0,
    collectionWidth: 0
  };

  function getCollectionWidth() {
    return $('.collection').first().width()
  };

  function setCollectionWidth() {
    state['collectionWidth'] = getCollectionWidth();
  };

  function calculateMoveWidth() {
    return state.currentCollection * state.collectionWidth;
  }

  function moveGallery() {
    $('.rail').css('transform', 'translateX(-' + calculateMoveWidth() + 'px)');
  };

  function checkMoveAvailability() {
    if (state.currentCollection + 1 >= state.collections) {
      $('.next').first().addClass('disabled');
    } else {
      $('.next').first().removeClass('disabled');
    }

    if (state.currentCollection <= 0) {
      $('.prev').first().addClass('disabled');
    } else {
      $('.prev').first().removeClass('disabled');
    }
  }

  $('.prev').first().on('click', function(e) {
    checkMoveAvailability();
    setCollectionWidth();

    if (state.currentCollection > 0) {
      state['currentCollection']--
    }

    if ($('.prev').first().hasClass('disabled')) {
      e.preventDefault();
    } else {
      moveGallery();
    }
  });

  $('.next').first().on('click', function(e) {
    checkMoveAvailability();
    setCollectionWidth();

    if (state.collections >= state.currentCollection + 1) {
      state['currentCollection']++
    }

    if ($('.next').first().hasClass('disabled')) {
      e.preventDefault();
    } else {
      moveGallery();
    }
  });

  $(window).resize(function() {
    setCollectionWidth();

    setTimeout(function() {
      setCollectionWidth();
      moveGallery();
    }, 1000);
  });

  setCollectionWidth();
});
