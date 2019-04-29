import { AircraftInfo } from '../typings';

export const AIRCRAFT_TABLE: Array<AircraftInfo> = [
    { id: 1, name: 'A310-300', category: 6, speed: 850, range: 9630, price: 157300000, seats: 275, payload: 27.5 },
    { id: 2, name: 'A330-300', category: 7, speed: 871, range: 10804, price: 239400000, seats: 440, payload: 45.9 },
    { id: 3, name: '757-200', category: 5, speed: 850, range: 7593, price: 111600000, seats: 239, payload: 26.7 },
    { id: 4, name: '787-8', category: 8, speed: 911, range: 15196, price: 206800000, seats: 381, payload: 43.3 },
    { id: 5, name: '777-200', category: 6, speed: 892, range: 9710, price: 238600000, seats: 440, payload: 57.4 },
    { id: 6, name: 'A319-100LR', category: 4, speed: 828, range: 9250, price: 85800000, seats: 160, payload: 16 },
    { id: 7, name: '737-700ER', category: 5, speed: 834, range: 9080, price: 81300000, seats: 149, payload: 17 },
    { id: 8, name: 'A330-200', category: 7, speed: 871, range: 13435, price: 216100000, seats: 406, payload: 40.6 },
    { id: 9, name: '767-200ER', category: 6, speed: 850, range: 11832, price: 160200000, seats: 290, payload: 35.6 },
    { id: 10, name: '767-300ER', category: 7, speed: 850, range: 11100, price: 182800000, seats: 351, payload: 43.8 },
    { id: 11, name: '767-400ER', category: 9, speed: 850, range: 10424, price: 200800000, seats: 375, payload: 46.5 },
    { id: 12, name: 'A340-300', category: 8, speed: 871, range: 13704, price: 254600000, seats: 440, payload: 44 },
    { id: 13, name: 'A340-500', category: 9, speed: 881, range: 16678, price: 280100000, seats: 475, payload: 47.5 },
    { id: 14, name: '777-200ER', category: 8, speed: 892, range: 14315, price: 258800000, seats: 440, payload: 59.4 },
    { id: 15, name: '777-200LR', category: 8, speed: 892, range: 17512, price: 291200000, seats: 440, payload: 64 },
    { id: 16, name: 'A340-600', category: 9, speed: 881, range: 14640, price: 294600000, seats: 530, payload: 55.6 },
    { id: 17, name: '777-300', category: 9, speed: 892, range: 11119, price: 284700000, seats: 550, payload: 66.9 },
    { id: 18, name: '777-300ER', category: 8, speed: 892, range: 14695, price: 315000000, seats: 550, payload: 69.9 },
    { id: 19, name: 'A380-800', category: 8, speed: 903, range: 15556, price: 403000000, seats: 853, payload: 89.2 },
    { id: 20, name: '747-400', category: 8, speed: 903, range: 13454, price: 296300000, seats: 660, payload: 67.5 },
    { id: 21, name: '747-8I', category: 9, speed: 911, range: 14825, price: 352800000, seats: 730, payload: 76 },
    { id: 22, name: 'SSJ-100-95', category: 4, speed: 828, range: 4578, price: 42500000, seats: 98, payload: 12.2 },
    { id: 23, name: 'ERJ-175', category: 3, speed: 828, range: 3706, price: 37000000, seats: 88, payload: 10.4 },
    { id: 24, name: 'A320-200', category: 5, speed: 828, range: 6111, price: 91500000, seats: 180, payload: 18.3 },
    { id: 25, name: 'MD-83', category: 6, speed: 807, range: 4637, price: 85500000, seats: 167, payload: 19.2 },
    { id: 26, name: '737-500', category: 6, speed: 786, range: 4725, price: 64200000, seats: 132, payload: 15.2 },
    { id: 27, name: '737-600', category: 4, speed: 834, range: 5976, price: 64000000, seats: 132, payload: 15.6 },
    { id: 28, name: 'ERJ-145XR', category: 5, speed: 850, range: 3706, price: 25500000, seats: 50, payload: 6 },
    { id: 29, name: 'A318-100', category: 3, speed: 828, range: 6019, price: 70100000, seats: 136, payload: 13.6 },
    { id: 30, name: '737-300', category: 5, speed: 786, range: 4540, price: 73300000, seats: 149, payload: 16.1 },
    { id: 31, name: '737-700', category: 3, speed: 834, range: 6374, price: 74800000, seats: 149, payload: 17.5 },
    { id: 32, name: 'ERJ-170', category: 3, speed: 828, range: 3891, price: 33500000, seats: 80, payload: 9.8 },
    { id: 33, name: 'MD-90-30', category: 5, speed: 807, range: 3861, price: 84400000, seats: 167, payload: 19 },
    { id: 34, name: 'ERJ-190', category: 5, speed: 828, range: 4447, price: 46500000, seats: 114, payload: 13.1 },
    { id: 35, name: 'A319-100', category: 4, speed: 828, range: 7130, price: 83600000, seats: 160, payload: 16 },
    { id: 36, name: '737-400', category: 6, speed: 786, range: 3891, price: 81000000, seats: 189, payload: 19.9 },
    { id: 37, name: '737-800', category: 6, speed: 834, range: 5772, price: 89100000, seats: 189, payload: 21.3 },
    { id: 38, name: 'ERJ-195', category: 5, speed: 828, range: 4077, price: 49000000, seats: 124, payload: 13.6 },
    { id: 39, name: 'A321-200', category: 5, speed: 828, range: 5950, price: 107300000, seats: 220, payload: 22 },
    { id: 40, name: '737-900ER', category: 6, speed: 834, range: 6050, price: 94600000, seats: 220, payload: 23 },
    { id: 41, name: 'A300-600R', category: 4, speed: 850, range: 7540, price: 197900000, seats: 360, payload: 36 },
    { id: 42, name: 'EMB-120', category: 2, speed: 552, range: 2555, price: 10700000, seats: 30, payload: 3.3 },
    { id: 43, name: 'S-340B', category: 1, speed: 467, range: 1735, price: 12800000, seats: 37, payload: 3.7 },
    { id: 44, name: '42-500', category: 1, speed: 540, range: 1555, price: 16000000, seats: 50, payload: 5.4 },
    { id: 45, name: 'Q-400', category: 2, speed: 667, range: 2400, price: 26500000, seats: 80, payload: 8.5 },
    { id: 46, name: 'Q-200', category: 1, speed: 537, range: 1796, price: 13000000, seats: 40, payload: 4.6 },
    { id: 47, name: 'Jetstream-41', category: 1, speed: 547, range: 1433, price: 10500000, seats: 30, payload: 3.5 },
    { id: 48, name: 'ERJ-135', category: 4, speed: 828, range: 3243, price: 18500000, seats: 37, payload: 4.5 },
    { id: 49, name: 'Q-300', category: 1, speed: 537, range: 2274, price: 17000000, seats: 56, payload: 6.1 },
    { id: 50, name: 'CRJ-200', category: 4, speed: 828, range: 3650, price: 23000000, seats: 50, payload: 6.1 },
    { id: 51, name: 'ERJ-140', category: 4, speed: 828, range: 3057, price: 21500000, seats: 44, payload: 5.3 },
    { id: 52, name: 'CRJ-700', category: 3, speed: 834, range: 3699, price: 33200000, seats: 78, payload: 8.5 },
    { id: 53, name: 'CRJ-900', category: 4, speed: 850, range: 3407, price: 38200000, seats: 90, payload: 10.6 },
    { id: 54, name: '42-600', category: 1, speed: 540, range: 1629, price: 16400000, seats: 50, payload: 5.9 },
    { id: 55, name: 'ERJ-145', category: 6, speed: 828, range: 2872, price: 24000000, seats: 50, payload: 5.8 },
    { id: 56, name: 'CRJ-1000', category: 5, speed: 850, range: 3129, price: 43200000, seats: 104, payload: 12 },
    { id: 57, name: '72-500', category: 2, speed: 500, range: 1648, price: 22600000, seats: 74, payload: 7.5 },
    { id: 58, name: '72-600', category: 2, speed: 500, range: 1731, price: 23000000, seats: 74, payload: 8 },
    { id: 59, name: '717-200', category: 3, speed: 828, range: 3815, price: 56300000, seats: 134, payload: 14.5 },
    { id: 60, name: 'RJ-85', category: 2, speed: 765, range: 2461, price: 56700000, seats: 118, payload: 11.8 },
    { id: 61, name: 'B727-100', category: 4, speed: 890, range: 2659, price: 68000000, seats: 131, payload: 13.8 },
    { id: 62, name: 'MD-11', category: 9, speed: 876, range: 12270, price: 232000000, seats: 410, payload: 52.6 },
    { id: 63, name: 'Caravelle 12', category: 3, speed: 800, range: 1727, price: 64000000, seats: 130, payload: 13 },
    { id: 64, name: 'Concorde', category: 10, speed: 2145, range: 6222, price: 250000000, seats: 128, payload: 12.8 },
    { id: 71, name: 'A310-300F', category: 6, speed: 850, range: 7551, price: 141500000, seats: 0, payload: 37.3 },
    { id: 72, name: '42-500F', category: 1, speed: 540, range: 1555, price: 15500000, seats: 0, payload: 5.8 },
    { id: 73, name: 'B737-700C', category: 7, speed: 834, range: 5333, price: 73500000, seats: 0, payload: 18.8 },
    { id: 74, name: 'B747-400ERF', category: 10, speed: 903, range: 9204, price: 281200000, seats: 0, payload: 113.1 },
    { id: 77, name: 'DC-3', category: 1, speed: 312, range: 2420, price: 7500000, seats: 32, payload: 3.2 },
    { id: 78, name: 'EMB-120FC', category: 2, speed: 552, range: 2555, price: 11000000, seats: 0, payload: 3.7 },
    { id: 79, name: 'S-340BF', category: 1, speed: 467, range: 1731, price: 12800000, seats: 0, payload: 3.4 },
    { id: 80, name: 'T-214-220', category: 7, speed: 834, range: 5650, price: 85000000, seats: 0, payload: 25.2 },
    { id: 83, name: '757-200PF', category: 5, speed: 850, range: 5435, price: 109000000, seats: 0, payload: 32.8 },
    { id: 87, name: '72-500F', category: 2, speed: 500, range: 1648, price: 23000000, seats: 0, payload: 8.6 },
    { id: 89, name: 'CRJ-200PF', category: 4, speed: 828, range: 3213, price: 22000000, seats: 0, payload: 6.1 },
    { id: 92, name: 'A330-200F', category: 7, speed: 871, range: 7408, price: 203600000, seats: 0, payload: 65 },
    { id: 95, name: 'MD-11CF', category: 9, speed: 876, range: 8415, price: 270000000, seats: 0, payload: 89.6 },
    { id: 96, name: '777-200F', category: 8, speed: 892, range: 9047, price: 295700000, seats: 0, payload: 102.9 },
    { id: 97, name: 'Q400-PF', category: 2, speed: 667, range: 2075, price: 33000000, seats: 0, payload: 9.2 },
    { id: 98, name: 'F-100', category: 3, speed: 755, range: 3167, price: 43000000, seats: 122, payload: 12.2 },
    { id: 99, name: '737-300SF', category: 6, speed: 786, range: 3028, price: 68500000, seats: 0, payload: 19.7 },
    { id: 100, name: 'RJ-100QT', category: 3, speed: 765, range: 2130, price: 57000000, seats: 0, payload: 11.7 },
    { id: 101, name: '747-8F', category: 10, speed: 911, range: 8130, price: 352000000, seats: 0, payload: 134 },
    { id: 102, name: '767-300F', category: 8, speed: 850, range: 6028, price: 185000000, seats: 0, payload: 53.7 },
    { id: 105, name: '767-200F', category: 6, speed: 850, range: 6389, price: 163000000, seats: 0, payload: 43.1 },
    { id: 106, name: 'A300-600RF', category: 6, speed: 828, range: 4852, price: 174500000, seats: 0, payload: 48.1 },
    { id: 109, name: '707-320C', category: 10, speed: 890, range: 9917, price: 125000000, seats: 219, payload: 34 },
    { id: 110, name: '787-9', category: 8, speed: 911, range: 15556, price: 249500000, seats: 420, payload: 42 },
    { id: 112, name: 'A350-900XWB', category: 7, speed: 911, range: 15186, price: 295200000, seats: 475, payload: 47.5 },
    { id: 113, name: '747-100B', category: 6, speed: 907, range: 9815, price: 228500000, seats: 520, payload: 52 },
    { id: 114, name: '747-200B', category: 7, speed: 907, range: 13010, price: 265000000, seats: 595, payload: 68 },
    { id: 115, name: '747-200F', category: 9, speed: 907, range: 6695, price: 265000000, seats: 0, payload: 109 },
    { id: 116, name: '747-300', category: 6, speed: 916, range: 12400, price: 272500000, seats: 608, payload: 66 },
    { id: 117, name: 'A320neo', category: 4, speed: 839, range: 6482, price: 107300000, seats: 195, payload: 19.65 },
    { id: 120, name: 'DC8-73', category: 7, speed: 940, range: 10700, price: 105200000, seats: 259, payload: 26.373 },
    { id: 121, name: 'DC8-73AF', category: 8, speed: 940, range: 4928, price: 105000000, seats: 0, payload: 50.71 },
    { id: 122, name: 'DC8-55CF', category: 8, speed: 876, range: 4928, price: 77500000, seats: 0, payload: 43.79 },
    { id: 123, name: 'DC8-55', category: 7, speed: 876, range: 10100, price: 77500000, seats: 189, payload: 20.467 },
    { id: 124, name: '757-300', category: 6, speed: 850, range: 6840, price: 135400000, seats: 295, payload: 31 },
    { id: 125, name: 'TU-214-210', category: 5, speed: 850, range: 7300, price: 95500000, seats: 210, payload: 25.2 },
    { id: 129, name: 'A220-100', category: 2, speed: 850, range: 5700, price: 71800000, seats: 133, payload: 15.1 },
    { id: 130, name: 'A220-100-R', category: 1, speed: 850, range: 4075, price: 62000000, seats: 133, payload: 13.3 },
    { id: 131, name: 'A220-300', category: 4, speed: 850, range: 6100, price: 80380000, seats: 160, payload: 18.711 },
    { id: 133, name: 'A321neo', category: 5, speed: 839, range: 6644, price: 127000000, seats: 244, payload: 24.4 },
    { id: 134, name: 'A350-1000', category: 8, speed: 911, range: 14750, price: 335000000, seats: 522, payload: 56.1 },
    { id: 136, name: '787-10', category: 7, speed: 911, range: 10467, price: 257000000, seats: 440, payload: 44 },
    { id: 137, name: 'A350-900ULR', category: 7, speed: 911, range: 18000, price: 304000000, seats: 252, payload: 25.2 },
    { id: 138, name: 'A330-900', category: 6, speed: 883, range: 11100, price: 263000000, seats: 440, payload: 44 },
    { id: 139, name: '737-800BCF', category: 6, speed: 834, range: 4781, price: 79100000, seats: 0, payload: 22 },
    { id: 140, name: 'A321neo-LR', category: 5, speed: 839, range: 7400, price: 131500000, seats: 244, payload: 24.9 },
    { id: 141, name: 'E190-E2', category: 3, speed: 839, range: 6020, price: 55800000, seats: 114, payload: 11.4 },
];
