console.log("JS is Linked");

$(document).ready(function() {
  //all events
    $.ajax({
      method: 'GET',
      url: '/api/events',
      success: handleSuccessGet,
      error: handleError
    });

  //renderEvents(sampleEvents);
  let eventAddForm = $('#eventAddForm');
  let closeModal = $('#closeModal');

  // Add Event Button Clicked
  $('#eventAdd').on('click', function(e) {
      $('#eventsModal').modal();
    });

  //Save New Event
  eventAddForm.on('submit', function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    //POST to node
    $.post('/api/events', formData, function(event) {
      console.log(event);
      renderEvent(event);  //render the server's response
      eventAddForm.trigger('reset');
    });
  });

$('#eventsContainer').on('click', '.edit-event', function(e){

    e.preventDefault();
    let id= $(this).closest('.event').data('event-id'),
    selectorId = `#${id}`,
    selectorIdEventData = `${selectorId} .eventData`,
    selectorIdEventInput = `${selectorId} .eventInput`,
    selectorIdSaveEvent = `${selectorId} .save-event`,
    selectorIdEditEvent = `${selectorId} .edit-event`;
    console.log(`id: ${selectorId}`);
    console.log(`selectorIdEventInput: ${selectorIdEventInput}`)
    $(selectorIdEventInput).css("display","inline-block");
    $(selectorIdEventData).css("display","none");
    $(selectorIdSaveEvent).css("display","inline-block");
    $(selectorIdEditEvent).css("display","none");
  });

});
  // $("#addEvent").on("click")

//
// });

function renderEvent(event) {

  let eventHtml = (`
    <div class="event" id="${event._id}" data-event-id="${event._id}">
    <form id="${event._id}-update" action="#" onsubmit="return false" method="PUT" class="event-update-form" name="${event._id}-update">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin event internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail event-art">
                <img src="images/events/${event.image}" alt="event image class="eventData"">
                <span id="${event._id}-image-input-span" class='eventInput'>
                  <input id="${event._id}-image-input" type="text" name="image" value="${event.image}" size="${event.image.length}" required>
                </span>
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
                    <h4 class='inline-header'>Address:</h4>
                    <span id="${event._id}-address" class='eventData'>${event.address}</span>
                    <span id="${event._id}-address-input-span" class='eventInput'>
                      <input id="${event._id}-address-input" type="text" name="address"  size="${event.address.length}" value="${event.address}" required>
                    </span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Description:</h4>
                    <span id="${event._id}-desc" class='eventData'>${event.description}</span>
                    <span id="${event._id}-desc-input-span" class='eventInput'>
                      <textarea id="${event._id}-desc-input" name="description" cols="40" rows="5" required>${event.description}</textarea>
                    </span>
                  </li>

                </ul>
              </div>
            </div>
            <!-- end of event internal row -->
            <div class='row'>
              <div class='panel-footer'>
                <button class='btn btn-primary del-event pull-right'>Delete Event</button>
                <button class='btn btn-primary edit-event pull-right'>Edit Event</button>
                <button class='btn btn-primary save-event pull-right'>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>

    <!-- end one event -->
  `);
  $('#eventsContainer').append(eventHtml);
};

function renderEvents(eventsList){
  eventsList.forEach( function(item, index){
    renderEvent(item);
  });
}

function handleSuccessGet(eventsList){
  console.log(eventsList);
  renderEvents(eventsList);
}

function handleError(err){
  console.log(err);
}
