(function GetLoser(){

	this.applicants = [];

	this.init = function(){
		this.addApplicant();
		this.getRandomUser();
	};

	this.showList = function(){
			var parent = document.querySelector('.applicant_list_wrapper');
			var template = "";

			for(var i = 0; i < applicants.length; i++){
				template += '<span class="name-tag" data-id="'+ i +'">'+ applicants[i]+'</span>';

			}

			parent.innerHTML = '';
			parent.insertAdjacentHTML("afterbegin", template);
			deleteOne();

	};

	this.addApplicant = function(){
		function generateList(input){
			var value = input.value;

			if(this.checkValid(value.toLowerCase())){
				applicants.push(value.toLowerCase());
				input.value = '';
				showList();
			}else{
				alert("Something is wrong!");
			}

		}

		var addBtn = document.querySelector("#add_applicant");

		addBtn.addEventListener('click', function(){
			var input = document.querySelector("#applicant_value");
			generateList(input);
		});
	};


	this.checkValid = function(value){
		if(applicants.indexOf(value) < 0  && value != ""){
			return true;
		}
		return false;
	};

	this.deleteOne = function(){
		var item = document.querySelectorAll('.name-tag');

		function removeIt(element){
			var attr = parseInt(element.getAttribute('data-id'));
			applicants.splice(attr,1);

			showList();
		}

		for(var i = 0; i < item.length; i++){
			item[i].addEventListener('click',function(e){
				removeIt(this);
			})
		}
	};

	this.getRandomUser = function(){
		var resultsButton = document.querySelector('#show_result');

		function showLooser(){
			var resultsContainer = document.querySelector('.results_container');
			var applicantsContainer = document.querySelector('.applicant_container');

			applicantsContainer.className += ' hidden';
			resultsContainer.className = 'results_container';

			showRandomUser();
		}

		resultsButton.addEventListener('click', function(e){
			if(applicants.length > 1){
				showLooser();
			}
		})
	};

	this.showRandomUser = function(argument) {
		var resultContainer = document.querySelector('.result');
		var rand = applicants[Math.floor(Math.random() * applicants.length)];

		resultContainer.innerHTML = '';
		resultContainer.insertAdjacentHTML('afterbegin', '<h3>'+ rand +'</h3>');
	}

	this.init();
})();