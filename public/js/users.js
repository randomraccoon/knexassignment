$(function onReady() {
  $('.new-user-button').click(()=>{
    $('#new-user-form').toggle();
  });
  $('#new-user-form').hide();
  $('tr').click((ev)=>{
    let id = ev.target.parentNode.querySelector('td').textContent;
    window.location.assign('/users/' + id);
  })
});
