console.log("JS is Linked");


/* hard-coded data! */
var sampleEvents = [];
sampleEvents.push({
             dateAndTime: 'Ladyhawke',
             name: 'Ladyhawke',
             desc: 'Massa etiam, tortor pede enim tortor, ut blandit gravida aptent, repellat ridiculus. Tellus consectetuer tortor et nec. Interdum tempor vivamus eleifend mus quis wisi, libero ac feugiat scelerisque aut ac ea. Vitae ridiculus. At quam mus facilisis ac sed, mi egestas mauris nullam nec ridiculus, et platea ligula. Tincidunt mi. Velit integer praesent, egestas mattis doloremque consectetuer lobortis et sit, nullam nonummy mauris ac id ligula, viverra wisi amet metus, pretium viverra porttitor. Urna lacinia sem tortor, posuere ligula nulla lacinia eget enim. Non ut dui praesent ullamcorper, dolor eu blandit, ligula maecenas. Proin leo ipsum consectetuer fermentum quam, nunc aliquet, eget vel nec lectus ut. Pede mauris ligula, augue eu et eu ultrices wisi, luctus nibh turpis arcu, faucibus sem sed morbi. Cum etiam hac at, velit pellentesque sollicitudin potenti aenean urna.
'
             venue: '2008, November 18',
             address: '555 5th st., New York, NY 07753',
             image: 'eventImg.png'
           });
sampleEvents.push({
            dateAndTime: 'Ladyhawke',
            name: 'Ladyhawke',
            desc: 'Massa etiam, tortor pede enim tortor, ut blandit gravida aptent, repellat ridiculus. Tellus consectetuer tortor et nec. Interdum tempor vivamus eleifend mus quis wisi, libero ac feugiat scelerisque aut ac ea. Vitae ridiculus. At quam mus facilisis ac sed, mi egestas mauris nullam nec ridiculus, et platea ligula. Tincidunt mi. Velit integer praesent, egestas mattis doloremque consectetuer lobortis et sit, nullam nonummy mauris ac id ligula, viverra wisi amet metus, pretium viverra porttitor. Urna lacinia sem tortor, posuere ligula nulla lacinia eget enim. Non ut dui praesent ullamcorper, dolor eu blandit, ligula maecenas. Proin leo ipsum consectetuer fermentum quam, nunc aliquet, eget vel nec lectus ut. Pede mauris ligula, augue eu et eu ultrices wisi, luctus nibh turpis arcu, faucibus sem sed morbi. Cum etiam hac at, velit pellentesque sollicitudin potenti aenean urna.
          '
            venue: '2008, November 18',
            address: '555 5th st., New York, NY 07753',
            image: 'eventImg.png'
           });
sampleEvents.push({
            dateAndTime: 'Ladyhawke',
            name: 'Ladyhawke',
            desc: 'Massa etiam, tortor pede enim tortor, ut blandit gravida aptent, repellat ridiculus. Tellus consectetuer tortor et nec. Interdum tempor vivamus eleifend mus quis wisi, libero ac feugiat scelerisque aut ac ea. Vitae ridiculus. At quam mus facilisis ac sed, mi egestas mauris nullam nec ridiculus, et platea ligula. Tincidunt mi. Velit integer praesent, egestas mattis doloremque consectetuer lobortis et sit, nullam nonummy mauris ac id ligula, viverra wisi amet metus, pretium viverra porttitor. Urna lacinia sem tortor, posuere ligula nulla lacinia eget enim. Non ut dui praesent ullamcorper, dolor eu blandit, ligula maecenas. Proin leo ipsum consectetuer fermentum quam, nunc aliquet, eget vel nec lectus ut. Pede mauris ligula, augue eu et eu ultrices wisi, luctus nibh turpis arcu, faucibus sem sed morbi. Cum etiam hac at, velit pellentesque sollicitudin potenti aenean urna.
          '
            venue: '2008, November 18',
            address: '555 5th st., New York, NY 07753',
            image: 'eventImg.png'
           });
sampleEvents.push({
          dateAndTime: 'Ladyhawke',
          name: 'Ladyhawke',
          desc: 'Massa etiam, tortor pede enim tortor, ut blandit gravida aptent, repellat ridiculus. Tellus consectetuer tortor et nec. Interdum tempor vivamus eleifend mus quis wisi, libero ac feugiat scelerisque aut ac ea. Vitae ridiculus. At quam mus facilisis ac sed, mi egestas mauris nullam nec ridiculus, et platea ligula. Tincidunt mi. Velit integer praesent, egestas mattis doloremque consectetuer lobortis et sit, nullam nonummy mauris ac id ligula, viverra wisi amet metus, pretium viverra porttitor. Urna lacinia sem tortor, posuere ligula nulla lacinia eget enim. Non ut dui praesent ullamcorper, dolor eu blandit, ligula maecenas. Proin leo ipsum consectetuer fermentum quam, nunc aliquet, eget vel nec lectus ut. Pede mauris ligula, augue eu et eu ultrices wisi, luctus nibh turpis arcu, faucibus sem sed morbi. Cum etiam hac at, velit pellentesque sollicitudin potenti aenean urna.
        '
          venue: '2008, November 18',
          address: '555 5th st., New York, NY 07753',
          image: 'eventImg.png'
           });
/* end of hard-coded data */

$(document).ready(function() {
  / this function takes a single event and renders it to the page
  function renderEvent(event) {
    console.log('rendering event', event);


    let eventHtml = (`
      <div class="row event" id="${event._id}" data-event-id="${event._id}">
      <form id="${event._id}-update" action="#" onsubmit="return false" method="PUT" class="event-update-form" name="${event._id}-update">
        <div class="col-md-10 col-md-offset-1">
          <div class="panel panel-default">
            <div class="panel-body">
            <!-- begin event internal row -->
              <div class='row'>
                <div class="col-md-3 col-xs-12 thumbnail event-art">
                  <img src="images/800x800.png" alt="event image">
                </div>
                <div class="col-md-9 col-xs-12">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h4 class='inline-header'>Event Name:</h4>
                      <span id="${event._id}-name" class='eventData'>${event.name}</span>
                      <span id="${event._id}-name-input-span" class='eventInput'>
                        <input id="${event._id}-name-input" type="text" name="name" value="${event.name}" size="${event.name.length}" required>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <h4 class='inline-header'>Date and Time:</h4>
                      <span id="${event._id}-dateAndTime" class='eventData'>${event.dateAndTime}</span>
                      <span id="${event._id}-dateAndTime-input-span" class='eventInput'>
                        <input id="${event._id}-dateAndTime-input" type="text" name="dateAndTime" size="${event.dateAndTime.length}" value="${event.dateAndTime}" required>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <h4 class='inline-header'>Venue:</h4>
                      <span id="${event._id}-venue" class='eventData'>${event.venue}</span>
                      <span id="${event._id}-venue-input-span" class='eventInput'>
                        <input id="${event._id}-venue-input" type="text" name="venue"  size="${event.venue.length}" value="${event.venue}" required>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <h4 class='inline-header'>Description:</h4>
                      <span id="${event._id}-description" class='eventData'>${event.description}</span>
                      <span id="${event._id}-description-input-span" class='eventInput'>
                        <textarea id="${event._id}-description-input" name="description" cols="10" rows="5" value="${event.description}" required>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <h4 class='inline-header'>Venue:</h4>
                      <span id="${event._id}-address" class='eventData'>${event.address}</span>
                      <span id="${event._id}-address-input-span" class='eventInput'>
                        <input id="${event._id}-address-input" type="text" name="address"  size="${event.address.length}" value="${event.address}" required>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <h4 class='inline-header'>Venue:</h4>
                      <span id="${event._id}-image" class='eventData'>${event.image}</span>
                      <span id="${event._id}-image-input-span" class='eventInput'>
                        <input id="${event._id}-image-input" type="text" name="image"  size="${event.image.length}" value="${event.image}" required>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- end of event internal row -->
              <div class='panel-footer'>
                // <button class='btn btn-primary add-song'>Add Song</button>
                <button class='btn btn-primary del-event'>Delete Event</button>
                <button class='btn btn-primary edit-event'>Edit Event</button>
                <button class='btn btn-primary save-event'>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>

      <!-- end one event -->
    `);
    $('#events').append(eventHtml);
  };

}
