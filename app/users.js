const Users = require('../users');
var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua  Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia  Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre  Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts  Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad  Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks  Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

class UsersActions {
    constructor() {
        // super();

        this.addUser = this.addUser.bind(this);
    }

    async addUser(req, res) {
        console.log('----11----', req.body);
        try {
            const data = req.body;
            console.log('-----14----', data);
            // const user = new Users(data);
            // await user.save();
            return res.json({
                status: 'Success',
                data
            });
        } catch (err) {
            return res.json({
                err,
                status: 'error'
            });
        }
    }

        async getMessages(req, res) {
            try {
                // const projection = {
                //     message:1,
                //     username:1
                // };
                // const data = await Users.find({}, projection).limit(50).sort({
                //     createdAt: -1
                // });
                console.log('----34----');
                setTimeout(() => {
                    return res.json({
                        status: 'Success',
                        data: {
                            a: 'b'
                        }
                    })
                }, 2000)
            } catch (err) {
                return res.json({
                    err,
                    status: 'error'
                });
            }
        }

        async searchUser(req, res) {
            try{
                const body = req.body;
                const searchData = body.data;
                let data = country_list;
                if(searchData){
                    const regex = new RegExp(`\\w*${searchData}\\w*`, 'gi');
                    data = country_list.map(item => {
                            if (item.match(regex)) {
                                console.log('---65------');
                                return item;
                            }
                            return false;
                        }).filter(obj => obj);
                }
                return res.json({
                    status: 'Success',
                    data
                })
            } catch (err) {
                return res.json({
                    err,
                    status: 'error'
                });
            }
        }

        async getDetail(req, res) {
            try {
                const val = ['Raju', 'Mehar', 'Vinay', 'Inder', 'Ishaank', 'Sapna'];
                const data = [
                    [
                        val[Math.floor(Math.random() * Math.floor(6))], Math.floor(Math.random() * Math.floor(6))
                    ],
                    [
                        val[Math.floor(Math.random() * Math.floor(6))], Math.floor(Math.random() * Math.floor(6))
                    ],
                    [
                        val[Math.floor(Math.random() * Math.floor(6))], Math.floor(Math.random() * Math.floor(6))
                    ],
                    [
                        val[Math.floor(Math.random() * Math.floor(6))], Math.floor(Math.random() * Math.floor(6))
                    ],
                ]
                setTimeout(() => {
                    return res.json({
                        status: 'Success',
                        data
                    })
                }, 4000)
            } catch (err) {
                return res.json({
                    err,
                    status: 'error'
                });
            }
        }
}

module.exports = new UsersActions();