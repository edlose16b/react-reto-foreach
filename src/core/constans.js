export const API_URI = "http://127.0.0.1:3030/api/";
export const transportTypes = [
    "Metro",
    "Auto",
    "Camioneta",
    "Motocicleta",
    "BusTransantiago",
    "Bus",
    "AvionChile",
    "AviónInternacional",
    "Caminando",
]

export class Emision {
    static Metro = 0.0033;
    static Auto = 0.21;
    static Camioneta = 0.249;
    static Motocicleta = 0.092;
    static BusTransantiago = 0.039;
    static Bus = 0.012;
    static AvionChile = 0.279;
    static AviónInternacional = 0.179;
    static Caminando = 0;
}