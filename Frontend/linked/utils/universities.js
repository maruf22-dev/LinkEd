let universities = [
    "Ahsanullah University of Science and Technology	Dhaka",
    "American International University-Bangladesh	Dhaka",
    "Anwer Khan Modern University	Dhaka",
    "ASA University Bangladesh	Dhaka",
    "Asian University for Women	Chittagong",
    "Asian University of Bangladesh	Dhaka",
    "Atish Dipankar University of Science and Technology	Dhaka ...",
    "Bandarban University	Bandarban",
    "Bangabandhu Sheikh Mujib Medical University	Dhaka",
    "Bangabandhu Sheikh Mujibur Rahman Agricultural University	Gazipur",
    "Bangabandhu Sheikh Mujibur Rahman Maritime University	Dhaka",
    "Bangabandhu Sheikh Mujibur Rahman Science and Technology University	Gopalganj",
    "Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University	Melandaha",
    "Bangladesh Agricultural University	Mymensingh",
    "Bangladesh Islami University	Dhaka",
    "Bangladesh University	Dhaka",
    "Bangladesh University of Business and Technology	Dhaka",
    "Bangladesh University of Engineering and Technology	Dhaka",
    "Bangladesh University of Health Sciences	Dhaka",
    "Bangladesh University of Professionals	Mirpur",
    "Bangladesh University of Textiles	Dhaka",
    "Begum Gulchemonara Trust University	Chittagong",
    "Begum Rokeya University	Rangpur",
    "BGMEA University of Fashion and Technology	Dhaka",
    "BRAC University	Dhaka ...",
    "Britannia University	Comilla",
    "Canadian University of Bangladesh	Dhaka",
    "CCN University of Science and Technology	Comilla",
    "Central University of Science and Technology	Dhaka",
    "Central Women's University	Dhaka",
    "Chittagong Independent University	Chittagong",
    "Chittagong Medical University	Chittagong",
    "Chittagong University of Engineering and Technology	Chittagong ...",
    "Chittagong Veterinary and Animal Sciences University	Kulshi",
    "City University	Dhaka",
    "Comilla University	Comilla",
    "Cox's Bazar International University	Cox's Bazar",
    "Daffodil International University	Dhaka",
    "Dhaka International University	Dhaka",
    "Dhaka University of Engineering and Technology	Gazipur",
    "East Delta University	Chittagong",
    "East West University	Dhaka",
    "Eastern University Bangladesh	Dhaka",
    "European University of Bangladesh	Dhaka",
    "Exim Bank Agricultural University of Bangladesh	Chapainawabganj",
    "Fareast International University	Dhaka",
    "Feni University	Feni",
    "First Capital University of Bangladesh	Chuadanga",
    "German University Bangladesh	Gazipur ...",
    "Global University Bangladesh	Barisal",
    "Gono Bishwabidyalay	Dhaka",
    "Green University of Bangladesh	Dhaka ...",
    "Hajee Mohammad Danesh Science and Technology University	Dinajpur",
    "Hamdard University of Bangladesh	Munshiganj",
    "IBAIS University	Dhaka",
    "Independent University Bangladesh	Dhaka ...",
    "International Islamic University Chittagong	Chittagong",
    "International Standard University	Dhaka",
    "International University of Business Agriculture and Technology	Dhaka",
    "Ishakha International University Bangladesh	Kishorganj",
    "Islamic Arabic University	Dhaka",
    "Islamic University	Kushtia",
    "Islamic University of Technology	Gazipur",
    "Jagannath University	Dhaka",
    "Jahangirnagar University	Savar",
    "Jatiya Kabi Kazi Nazrul Islam University	Mymensingh",
    "Jessore University of Science and Technology	Jessore",
    "Khulna Agricultural University	Khulna",
    "Khulna University	Khulna",
    "Khulna University of Engineering and Technology	Khulna",
    "Khwaja Yunus Ali University	Enayetpur",
    "Leading University	Sylhet",
    "Manarat International University	Dhaka",
    "Mawlana Bhashani Science and Technology University	Tangail",
    "Metropolitan University	Sylhet",
    "N.P.I. University of Bangladesh	Manikgonj",
    "National University Bangladesh	Gazipur",
    "Noakhali Science and Technology University	Noakhali",
    "North Bengal International University	Rajshahi",
    "North East University Bangladesh	Sylhet",
    "North South University	Dhaka",
    "North Western University	Khulna",
    "Northern University of Bangladesh	Dhaka ...",
    "Northern University of Business and Technology Khulna	Khulna",
    "Notre Dame University Bangladesh	Dhaka",
    "Pabna Science and Technology University	Pabna",
    "Patuakhali Science and Technology University	Patuakhali ...",
    "Port City International University	Chittagong",
    "Premier University	Chittagong",
    "Presidency University Bangladesh	Dhaka",
    "Prime University	Dhaka",
    "Primeasia University	Dhaka",
    "Pundra University of Science and Technology	Bogra",
    "Queens University	Dhaka",
    "Rabindra Maitree University	Kushtia",
    "Rabindra University Bangladesh	Shahjadpur",
    "Rajshahi Medical University	Rajshahi",
    "Rajshahi Science and Technology University	Natore",
    "Rajshahi University	Rajshahi",
    "Rajshahi University of Engineering and Technology	Rajshahi",
    "Ranada Prasad Shaha University	Narayanganj",
    "Rangamati Science and Technology University	Rangamati",
    "Royal University of Dhaka	Dhaka ...",
    "Shahjalal University of Science and Technology	Sylhet",
    "Shanto Mariam University of Creative Technology	Dhaka",
    "Sheikh Fazilatunnesa Mujib University	Jamalpur",
    "Sheikh Hasina University	Netrokona",
    "Sher-e-Bangla Agricultural University	Dhaka",
    "Sonargaon University	Dhaka",
    "Southeast University Bangladesh	Dhaka",
    "Southern University Bangladesh	Chittagong",
    "Stamford University Bangladesh	Dhaka",
    "State University of Bangladesh	Dhaka",
    "Sylhet Agricultural University	Sylhet ...",
    "Sylhet International University	Sylhet",
    "Sylhet Medical University	Sylhet",
    "The International University of Scholars	Dhaka",
    "The Millenium University	Dhaka",
    "The People's University of Bangladesh	Dhaka ...",
    "Times University of Bangladesh	Faridpur",
    "United International University	Dhaka",
    "University of Asia Pacific	Dhaka",
    "University of Barisal	Barisal",
    "University of Chittagong	Chittagong",
    "University of Creative Technology Chittagong	Chittagong",
    "University of Development Alternative	Dhaka",
    "University of Dhaka	Dhaka ...",
    "University of Global Village	Barishal",
    "University of Information Technology and Sciences	Dhaka",
    "University of Liberal Arts Bangladesh	Dhaka",
    "University of Science and Technology Chittagong	Chittagong ...",
    "University of South Asia Bangladesh	Dhaka",
    "Uttara University	Dhaka",
    "Varendra University	Rajshahi",
    "Victoria University of Bangladesh	Dhaka",
    "World University of Bangladesh	Dhaka",
    "Z.H. Sikder University of Science and Technology	Bhedorgonj",
    "ZNRF University of Management Sciences	Dhaka"
]
export default universities;

