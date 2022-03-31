const $body = document.body
const $title = document.getElementById('title')
const $form = document.getElementById('form')
const $name = document.getElementById('name')
const $terms = document.getElementById('terms')
const $emp = document.getElementById('emp')
const $qual = document.getElementById('qual')
const hideMe = document.getElementById("saved")
let olddate;

// form event listener prevent page refresh

$form.addEventListener('submit', function (e){
  e.preventDefault()

  localStorage.removeItem('settings');

  $form.reset();

  hideMe.classList.add("hide");
  hideMe.classList.remove("show");

})

// get settings from local storage

const ls = localStorage.getItem('settings')

// if there is no data in local storage 
// it will return undefined
// will be true if a string is return
if (ls) {
  const settings = JSON.parse(ls)
  $name.value = settings.name
  $terms.checked = settings.terms
  $emp.value = settings.emp
  $qual.value = settings.qual
  hideMe.classList.remove("hide");
  hideMe.classList.add("show");
  date = settings.time
  document.getElementById("demo").innerHTML = new Date(date).toLocaleString('en-US')
}

// date last saved to local storage
// Button to display date

$form.addEventListener('click', function (e) {

  const $save = e.target.closest('.save');

  if ($save){
    console.log("working")

      hideMe.classList.remove("hide");
      hideMe.classList.add("show");

    let date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleString('en-US')

    let settings = {
      name: $name.value,
      terms: $terms.checked,
      emp: $emp.value,
      qual: $qual.value,
      time: date
    }
  
    localStorage.setItem('settings', JSON.stringify(settings))
  }

});






