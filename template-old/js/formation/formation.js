const SERVER_URL = `https://es.dump.academy/guess-melody`;
const date = document.querySelectorAll(`.formation__input_date`);



const checkStatus = response => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};


function formatDate(date) {

	var dd = date.getDate();
	if (dd < 10) dd = '0' + dd;

	var mm = date.getMonth() + 1;
	if (mm < 10) mm = '0' + mm;

	var yy = date.getFullYear();
	if (yy < 10) yy = '0' + yy;

	return dd + '.' + mm + '.' + yy;
}




var todayMinusYear = formatDate(new Date()).split('.');

todayMinusYear[todayMinusYear.length - 1] = Number(todayMinusYear[todayMinusYear.length - 1]) - 100;

todayMinusYear = todayMinusYear.join('.');


for (let i = 1; i <= date.length; i++) {
  flatpickr(`#birthday-${i}`, {
    enableTime: false,
    dateFormat: "d-m-Y",
    time_24hr: true,
    locale: "ru",
		allowInput: true,
		maxDate: "today",
		minDate: todayMinusYear,
		onClose: function(selectedDates, dateStr, instance) {
			  this.setDate(dateStr, true);
		}
  });

  const app = new Vue({
    el: `#nationalityComponent-${i}`,
    data() {
      return {
				isCountryList: false,
				countryName: "Выберите страну",
				countryNumber: "",
				nationalityList: countryOKMC 
			};
    },
    methods: {
      showCountry() {
        this.isCountryList = !this.isCountryList;
      },
      selectCountry(evt, index) {
        this.countryName = evt.target.textContent.trim();
				this.countryNumber = this.nationalityList[index].CODE;
        document.querySelector(".formation__country-title--text").classList.add("formation__country-title--text-active");

        this.isCountryList = false;
      }
    }
  });

  const documentFormation = new Vue({
    el: `#documentsComponent-${i}`,
    data() {
      return {
        showDocumentList: false,
        documentName: "Выберите документ",
        documentNumber: "",
        documentsList: [
          {
            name: "Паспорт гражданина Российской Федерации",
						number: 0,
						pattern: "9999 999999"
          },
          {
            name: "Удостоверение личности моряка (паспорт моряка)",
            number: 1,
						pattern: "*{1,50}"
          },
          {
            name:"Общегражданский заграничный паспорт гражданина Российской Федерации",
            number: 2,
						pattern: "999999999"
          },
          {
            name: "Паспорт иностранного гражданина",
            number: 3,
						pattern: "*{1,50}"
          },
          {
            name: "Свидетельство о рождении",
            number: 4,
						pattern: "AA-AA 999999"
          },
          {
            name: "Удостоверение личности военнослужащего",
						number: 5,
						pattern: "*{1,50}"
          },
          {
            name: "Удостоверение личности лица без гражданства",
						number: 6,
						pattern: "*{1,50}"
          },
          {
            name:
              "Временное удостоверение личности, выдаваемое органами внутренних дел",
						number: 7,
						pattern: "*{1,50}"
          },
          {
            name: "Военный билет военнослужащего срочной службы",
						number: 8,
						pattern: "AA 9999999"
          },
          {
            name:
              "Вид на жительство иностранного гражданина или лица без гражданства",
						number: 9,
						pattern: "*{1,50}"
          },
          {
            name: "Справка об освобождении из мест лишения свободы",
						number: 10,
						pattern: "*{1,50}"
          },
          {
            name: "Паспорт гражданина СССР",
						number: 11,
						pattern: "AA-AA 999999"
          },
          {
            name: "Паспорт дипломатический",
						number: 12,
						pattern: "*{1,50}"
          },
          {
            name:
              "Паспорт служебный (кроме паспорта моряка и дипломатического)",
						number: 13,
						pattern: "*{1,50}"
          },
          {
            name: "Свидетельство о возвращении из стран СНГ",
						number: 14,
						pattern: "*{1,50}"
          },
          {
            name: "Справка об утере паспорта",
						number: 15,
						pattern: "*{1,50}"
          },
          {
            name: "Свидетельство о предоставлении временного убежища",
						number: 18,
						pattern: "*{1,50}"
          },
          {
            name: "Другие документы, установленные федеральным законодательством или признаваемые в соответствии с международными договорами РФ в качестве документов, удостоверяющих личность пассажира",
						number: 99,
						pattern: "*{1,50}"
          }
        ]
      };
    },
    methods: {
      showDocuments() {
        this.showDocumentList = !this.showDocumentList;
      },
      selectDocuments(evt, index) {
        this.documentName = evt.target.textContent.trim();
        this.documentNumber = this.documentsList[index].number;
        document.querySelector(".formation__document-title--text").classList.add("formation__document-title--text-active");

				document.querySelector('#numberDocument-1').disabled = false;
				Inputmask(this.documentsList[index].pattern).mask(document.querySelector('#numberDocument-1'));

        this.showDocumentList = false;
      }
    }
  });
}

const payButton = new Vue({
  el: `#payButtom`,
  data() {
    return {
      state: ""
    };
  },
  methods: {
    sendData() {
      const requestSettings = {
        body: JSON.stringify(this.data),
        headers: {
          "Content-Type": `application/json`
        },
        method: `POST`
      };
      return fetch(`${SERVER_URL}/`, requestSettings)
        .then(checkStatus)
        .then(document.forms[0].submit());
    }
  }
});

//Mask document, phone, email

var inputFormationPhone = document.querySelector("#phoneUser-1");
var inputFormationEmail = document.querySelector("#emailUser-1");
var inputFormationBirthday = document.querySelector("#birthday-1");

var phoneMask = ["+", "7", " ", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
var birthdayMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];


var maskedInputPhone = vanillaTextMask.maskInput({
  inputElement: inputFormationPhone,
	mask: phoneMask,
	guide: false
});

var maskedInputBirthday = vanillaTextMask.maskInput({
  inputElement: inputFormationBirthday,
  mask: birthdayMask
});









