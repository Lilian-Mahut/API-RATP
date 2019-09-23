export class Ratp {
    public static fromJson(json: Object): Ratp {
        return new Ratp(
            json['transportListe'],
            json['ligneListe'],
            json['directionListe'],
            json['stationListe']
        );
    }

    constructor(public transportListe  : string,
                public ligneListe      : string,
                public directionListe  : string,
                public stationListe    : string) {
                }
}
