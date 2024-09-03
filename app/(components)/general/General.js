'use client'
import React, { useState } from 'react'

export default function General() {

    const [emailsBranding, setEmailsBranding] = useState(true)
    const [vehicleOwner, setVehicleOwner] = useState(false)

    const EmailsBrandingTrue = () => {
        setEmailsBranding(true)
    }

    const EmailsBrandingFalse = () => {
        setEmailsBranding(false)
    }

    const VehicleOwnerTrue = () => {
        setVehicleOwner(true)
    }

    const VehicleOwnerFalse = () => {
        setVehicleOwner(false)
    }



    const timezones = [
        "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara",
        "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre",
        "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta",
        "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala",
        "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg",
        "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa",
        "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi",
        "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane",
        "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey",
        "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli",
        "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla",
        "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca",
        "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja",
        "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta",
        "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman",
        "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan",
        "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize",
        "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay",
        "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman",
        "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba",
        "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver",
        "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador",
        "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay",
        "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil",
        "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis",
        "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City",
        "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik",
        "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello",
        "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes",
        "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique",
        "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla",
        "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo",
        "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome",
        "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem",
        "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix",
        "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico",
        "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina",
        "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo",
        "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns",
        "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current",
        "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto",
        "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat",
        "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie",
        "Antarctica/Mawson", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll",
        "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr",
        "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku",
        "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan",
        "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta",
        "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta",
        "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu",
        "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait",
        "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk",
        "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar",
        "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai",
        "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran",
        "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane",
        "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores",
        "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira",
        "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane",
        "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart",
        "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney",
        "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin",
        "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau",
        "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man",
        "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon",
        "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn",
        "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague",
        "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov",
        "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane",
        "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius",
        "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo",
        "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe",
        "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland",
        "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury",
        "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal",
        "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein",
        "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk",
        "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby",
        "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake",
        "Pacific/Wallis", "UTC"
    ];

    const currency = ['British pound', 'Canadian dollar', 'Chinese yuan', 'Czech koruna', 'Euro', 'Indonasian Rupiah',
        'Japanese yen', 'New Zealand dollar', 'Russian ruble', 'Saudi Riyal', 'South African Rands', 'Swiss Franc', 'UAE Dirham', 'United State Dollar'
    ]


    return (
        <>
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Emails branding</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        You can use your own logo for emails. Note, best effect will be if you use a logo with a transparent background in white or dark color png image. The image will be sourced from the company specified in the contract or the default company.
                    </p>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={EmailsBrandingTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${emailsBranding ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={EmailsBrandingFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${emailsBranding ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>
            </div>
            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Hide vehicle owners</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        If you choose "yes" the system will hide vehicles owners in calendar for partners
                    </p>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={VehicleOwnerTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${vehicleOwner ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={VehicleOwnerFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${vehicleOwner ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>
            </div>

            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Default calendar view (fleet type)</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Select fleet type you want to use by default, own fleet, partners fleet or both
                    </p>
                    <div className='w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2'>
                            <option value=""></option>
                            <option value="All">All</option>
                            <option value="own">Own</option>
                            <option value="Partner fleet">Partner fleet</option>
                        </select>
                    </div>
                </div>
            </div>

            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Calendar settings</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Include vehicles without reservations
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 text-gray-500'>
                            <option value="Reservations">Reservations</option>
                            <option value="Vehicle">Vehicle</option>
                        </select>
                    </div>
                </div>
            </div>


            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Timezone</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        This timezone will be used to format time and date
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 text-gray-500'>
                            {
                                timezones.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                }
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>


            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Currency</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        You can select default currency here
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 text-gray-500'>
                            {
                                currency.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                }
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>

            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Courier not assigned warning</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Type time in hours before showing assign courier warning on reservations page.
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <input type='text' className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 outline-none' />
                    </div>
                </div>
            </div>


            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Delivery price</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Delivery price for 1 kilometer in system currency (used in offers generator, delivery block)
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <input type='text' className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 outline-none' />
                    </div>
                </div>
            </div>


            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Notify about events</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Notify about events (start, finish), show tips about courier assign in reservations list, etc.
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2'>
                            <option value=""></option>
                            <option value="All">All</option>
                            <option value="own">Own</option>
                            <option value="Partner fleet">Partner fleet</option>
                        </select>
                    </div>
                </div>
            </div>


            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Offer valid settings</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        You can set default value and hide or display time selector in offer generate dialog.
                    </p>
                    <div className="relative w-full md:w-[25%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Offer Valid hours
                        </label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>



            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='md:w-[50%]'>
                        <p className='font-bold text-gray-500 text-sm my-3'>Offer text settings</p>
                        <p className='w-full  text-[12px] text-gray-400'>
                            this text will be shown on offer page
                        </p>
                    </div>
                    <div className="w-full md:w-[50%]">
                        <textarea
                            className='w-full border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500 '
                            id=""
                            name=""
                            rows="4"
                            cols="50"
                        />
                    </div>
                </div>
            </div>



            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='md:w-[50%]'>
                        <p className='font-bold text-gray-500 text-sm my-3'>Vaucher text settings (additional conditions)</p>
                        <p className='w-full  text-[12px] text-gray-400'>
                            this text will be shown on vaucher page
                        </p>
                    </div>
                    <div className="w-full md:w-[50%]">
                        <textarea
                            className='w-full border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500 '
                            id=""
                            name=""
                            rows="4"
                            cols="50"
                        />
                    </div>
                </div>
            </div>

            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Default vehicle type</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Default vehicle type for new reservations
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2'>
                            <option value=""></option>
                            <option value="">Car</option>
                            <option value="">Wagon/Estate</option>
                            <option value="">Moto</option>
                            <option value="">Watertoy</option>
                            <option value="">Boat</option>
                        </select>
                    </div>
                </div>
            </div>


            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Default reservations tab</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Default tab for reservation view
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2'>
                            <option value=""></option>
                            <option value="">After Tomm</option>
                            <option value="">Wagon/Estate</option>
                            <option value="">Moto</option>
                            <option value="">Watertoy</option>
                            <option value="">Boat</option>
                        </select>
                    </div>
                </div>
            </div>


        </>
    )
}
