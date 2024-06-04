console.log('Nhung thanh cong');
const listNavItems = document.querySelectorAll('.nav-link')
if(listNavItems.length){
    listNavItems.forEach(function(item){
        //console.log(item);
        item.addEventListener('click',function(event){
        const currentActiveItems = document.querySelectorAll('.nav-active')
        currentActiveItems.forEach(function(activeItem){
            activeItem.classList.remove('nav-active')
        })
        item.classList.add('nav-active')
        //event la 1 object ghi lai toan bo su kien xay ra 
        //C2:event.target.classlist.add('nav-active')
        })
    })
}
const sidebar = document.querySelector('#sidebar');
const btnToggleSidebar = document.querySelector('#btnToggleSidebar');
if (btnToggleSidebar && sidebar) {
    btnToggleSidebar.addEventListener('click',()=>{
        sidebar.classList.toggle('mini-sidebar')
    })
}
const listData = [
    {
        id:1,
        name: '[Resin] Goku 1/4 cực nét',
        dim_attribute: '40cm * 56cm * 24cm - (Dài * Cao * Sâu)',
        weight_attribute: '3kg',
        description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://i.ebayimg.com/images/g/aTsAAOSwMMxe-94F/s-l1200.webp'
    },
    {
        id:2,
        name: '[Resin] Goku SSJ 4 1/4 cực nét',
        dim_attribute: '22cm * 56cm * 22cm - (Dài * Cao * Sâu)',
        weight_attribute: '3kg',
        description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://media.karousell.com/media/photos/products/2022/4/8/original_dragonball_goku_super_1649412048_ec3eb94f_progressive.jpg'
    },
    {
        id:3,
        name: '[Resin] Broly',
        dim_attribute: '24cm * 42cm * 14cm - (Dài * Cao * Sâu)',
        weight_attribute: '2,1kg',
        description: 'Mô hình Broly Resin cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://www.clubhousestatues.com/cdn/shop/files/B169DB90-2CDC-4AB7-AE16-57A43041367E.jpg?v=1703168952&width=1946'
    },
    {
        id:4,
        name: '[Resin] Vegeta bán thân',
        dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
        weight_attribute: '1,6kg',
        description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
        image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
    }
]

