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

  $('.next').first().on('click', function() {
    console.log('clicked', state);
    state['currentCollection']++
    setCollectionWidth();
    moveGallery();
  });

  $(window).resize(function() {
    console.log('resized', state);
    setCollectionWidth();

    setTimeout(function() {
      setCollectionWidth();
      moveGallery();
    }, 1000);
  });

  setCollectionWidth();
});
