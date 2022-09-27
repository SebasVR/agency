import CartagenaVuelo from '../assets/img/Cartagena.jpg'
import MiamiVuelo from '../assets/img/Miami.jpg'
import PuntaCanaVuelo from '../assets/img/punta_Cana.jpg'
import SanAndresVuelo from '../assets/img/San-Andres.jpg'
import CartagenaPaquete from '../assets/img/cartagena-plaza-paquete.jpg'
import TayronaPaquete from '../assets/img/tayrona-rodadero-paquete.jpg'
import TorreDelMarPaquete from '../assets/img/torre-del-mar-paquete.jpg'
import DreamsHotel from '../assets/img/dreams-palm-beach-hotel.jpg'
import RiuHotel from '../assets/img/riu-palace-cabo-san-lucas-hotel.jpg'

export const stock = [
    {
        id: 1,
        nombre: 'Vuelos a Cartagena',
        promo: 20,
        precio: 250000,
        img: CartagenaVuelo,
        stock: 0,
        desc: '10% descuento',
        category: 'vuelos'
    },
    {
        id: 2,
        nombre: 'Vuelos a Miami',
        promo: 20,
        precio: 1200000,
        img: MiamiVuelo,
        stock: 4,
        desc: '50% descuento',
        category: 'vuelos'
    },
    {
        id: 3,
        nombre: 'Vuelos a Punta Cana',
        promo: 20,
        precio: 890000,
        img: PuntaCanaVuelo,
        stock: 5,
        desc: '5% descuento',
        category: 'vuelos'
    },
    {
        id: 4,
        nombre: 'Vuelos a San Andres',
        promo: 20,
        precio: 560000,
        img: SanAndresVuelo,
        stock: 50,
        desc: '25% descuento',
        category: 'vuelos'
    },
    {
        id: 5,
        nombre: 'Vuelos + Hotel las Americas Torre del Mar',
        promo: 20,
        precio: 1336000,
        img: TorreDelMarPaquete,
        stock: 0,
        desc: '60% descuento',
        category: 'paquetes'
    },
    {
        id: 6,
        nombre: 'Vuelos + Hotel Cartagena Plaza',
        promo: 20,
        precio: 1104000,
        img: CartagenaPaquete,
        stock: 10,
        desc: '40% descuento',
        category: 'paquetes'
    },
    {
        id: 7,
        nombre: 'Vuelos + Hotel en Santa Marta La Riviera',
        promo: 20,
        precio: 796537,
        img: TayronaPaquete,
        stock: 18,
        desc: '35% descuento',
        category: 'paquetes'
    },
    {
        id: 8,
        nombre: 'Hotel en Punta Cana Dreams Palm Beach Punta Cana',
        promo: 20,
        precio: 3159000,
        img: DreamsHotel,
        stock: 45,
        desc: '69% descuento',
        category: 'hoteles'
    },
    {
        id: 9,
        nombre: 'Hotel en San Jose del Cabo Riu Palace Cabo San Lucas',
        promo: 20,
        precio: 5452359,
        img: RiuHotel,
        stock: 0,
        desc: '65% descuento',
        category: 'hoteles'
    },
]