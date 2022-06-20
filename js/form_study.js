/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

let userFormDOM = document.querySelector('#userForm') //html form nesne bağlantısını bir javascript değişkenine tanımladık ki üzerinde işlem yapabilelim
userFormDOM.addEventListener('submit', formHandler)   //userFormDOM değişkenine tetikleme eylemi ve tetiklenecek founciton tanımladık

const alertDOM = document.querySelector('#alert')
//function tanımlama
const alertFunction = (title, message, className="warning") => `  
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler (event) {  //formHandler fonksiyonu addEventListener parametresi olarak tanımlandığı için diğer fonksiyon tanımlama metotlarında (const formHandler = function(event){} gibi) fonksiyon çalışmaz. Fonksiyon içerisinde belirtilen fonksiyonlar, diğer fonksiyon tanımlama metotları ile tanımlanabilir.
    event.preventDefault() //submit eylemi çalışmasın, girilen bilgileri ilgili url adresine göndermemesi için. amacımız girilen bilgileri url adresine göndermek değil, girilen bilgiler ile yeni liste elemanları oluşturmak.
    const USER_NAME = document.querySelector("#username")   //html kullanıcı adı nesnesini değişkene tanımladık
    const SCORE = document.querySelector("#score")          //html score (not) nesnesini değişkene tanımladık
    
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)   //eğer, her iki talep edilen bilgi de girildi ise, "addItem" FONKSİYONU ile listeyi oluştur 
        USER_NAME.value = ""                    //ve sonra form kutularını sıfırla (boş değer ata)
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Uyarı!",
            "Eksik Bilgi Girdiniz",
            "danger"
        )
    }
    
}

let ulUserListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {          //girilen bilgiler ile liste oluşturma fonksiyonu
    let liDOM = document.createElement('li')    //liste nesnesi oluştur ve liDOM değişkenine ata, ve sonra girilen kullanıcı adı ve not bilgisini liste nesnesine ata, ve görüntüleme belirtilen class özelliklerinde olsun
    liDOM.innerHTML = `
        ${userName} 
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )                                           //fonksiyon ile oluşturulan nesneye bu class özelliklerini ekle
    ulUserListDOM.append(liDOM)                 //oluşturulan listeyi ul (unordered list) nesne sonuna ekle (prepend olsa idi başına eklerdi)
}
