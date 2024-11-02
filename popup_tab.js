function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }
  
  window.onload = function() {
    openPopup('disclaimer-popup');
  };