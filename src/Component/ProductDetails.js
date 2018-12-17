import React, { Component } from 'react';
import $ from 'jquery';

class ProductDetails extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            ProductDetail : this.props.location.state.id            
        }
    }
    

    componentDidMount() {        
        let data1 = this.props.location.state.id.id;
      try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
      }
      catch(e) {
        console.error(e);
        $('.no-browser-support').show();
        $('.app').hide();
      }

      var noteTextarea = $('#note-textarea');
      var instructions = $('#recording-instructions');
      
      var noteContent = '';

      /*-----------------------------
            Voice Recognition 
      ------------------------------*/

      recognition.continuous = true;

      // This block is called every time the Speech APi captures a line. 
      recognition.onresult = function(event) {
        var current = event.resultIndex;

        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;        
        var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

        if(!mobileRepeatBug) {
          noteContent += transcript;
          noteTextarea.val(noteContent);
        }
      };

      recognition.onstart = function() { 
        instructions.text('Voice recognition activated. Try speaking into the microphone.');
      }

      recognition.onspeechend = function() {
        instructions.text('You were quiet for a while so voice recognition turned itself off.');
      }

      recognition.onerror = function(event) {
        if(event.error == 'no-speech') {
          instructions.text('No speech was detected. Try again.');  
        };
      }

      /*-----------------------------
            App buttons and input 
      ------------------------------*/

      $('#start-record-btn').on('click', function(e) {
        if (noteContent.length) {
          noteContent += ' ';
        }
        recognition.start();
      });

      // Sync the text inside the text area with the noteContent variable.
      noteTextarea.on('input', function() {
        noteContent = $(this).val();
      });

      $('#save-note-btn').on('click', function(e) {
        recognition.stop();

        if(!noteContent.length) {
          instructions.text('Could not save empty note. Please add a message to your note.');
        }
        else {
          const url = "http://172.24.133.230/eripsa-demo/jsondata/json_receive_notes.php";
          
          let data = {
            customer_id: localStorage.getItem('user'),
            retailer_id: 1,
            product_id: data1,
            notes: noteContent,
            created: "2017-06-15 4:10:00"
          }

          let apiData = JSON.stringify({
            customer_enquiry: data
          });

          // Create an empty Headers instance
          var headers = new Headers();

          // Add a few headers
          headers.append('Content-Type', 'text/plain');
          headers.append('X-My-Custom-Header', 'CustomValue');

          // Check, get, and set header values
          headers.has('Content-Type'); // true
          headers.get('Content-Type'); // "text/plain"
          headers.set('Content-Type', 'application/json');

          // Delete a header
          headers.delete('X-My-Custom-Header');

          // Add initial values
          var headers = new Headers({
            'Content-Type': 'text/plain',
            'X-My-Custom-Header': 'CustomValue'
          });

          // Create our request constructor with all the parameters we need
          var request = new Request(url, {
              method: 'POST', 
              body: apiData,
              headers: headers
          });

          fetch(request)
          .then(response => {
            return response.json();
          })
          .then(function(data) {
              $('#recording-instructions').css("color","green");
              $('#recording-instructions').html("Send queries successfully.");
          })
          .catch(function(error) {
            $('#recording-instructions').css("color","red");
            $('#recording-instructions').html(error);
          });

          // Reset variables and update UI.
          noteContent = '';
          noteTextarea.val('');
        }
      });
    }

    render() {
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                    <div className="row productDetailsPage">
                        <div className="col-lg-4 col-sm-4">
                            <div className="productLeftImage col-sm-12">
                                <div className="productImage col-sm-12">
                                    <img className="card-img-top" src={this.state.ProductDetail.image1} alt="Card cap"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-8">
                            <br/>
                            <div className="productDesc">
                                <div className="col-sm-12 clear d-flex flex-wrap">
                                    <h3>{this.state.ProductDetail.product_name}</h3>
                                </div>
                                <div className="d-flex col-sm-12 flex-wrap">
                                    <label className="labelBold">Description: </label> <label className="ml-2">  {this.state.ProductDetail.product_desc} </label>
                                </div> 
                                <div className="d-flex col-sm-12 flex-wrap">
                                    <label className="labelBold">Price: </label> <label className="ml-2"> ₹{this.state.ProductDetail.product_price} </label>
                                </div>                               
                               <div className="d-flex col-sm-12 flex-wrap product-Top">
                                    <button className="btn btn-success" id="start-record-btn" title="Start Recording" onClick={()=>this.setState({start : !this.state.start})} >Ask Eripsa</button>
                                </div> 
                                <div className="d-flex col-sm-12 flex-wrap product-Top">
                                    <button className="btn btn-success" id="save-note-btn" title="Save Queries" onClick={()=>this.setState({start : !this.state.start})}>send</button>
                                </div> 

                                <div className="Queries">
                                   <div className="input-single">
                                       <p id="note-textarea" placeholder="Create a new note by typing or using voice recognition." ></p>
                                   </div>
                                   
                                   <p id="recording-instructions">Note: Press the <strong>Ask Eripsa</strong> button and allow access.</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;