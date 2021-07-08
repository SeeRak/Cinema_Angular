export class Film {

    private _id : number;
    private _titre : string;
    private _poster : string;
    private _trailer : string;
    private _trailer2 : string;
    private _synopsis : string;
    private _realisateur : string;
    private _acteurs : string[];
    private _realisation : string;
    private _duree : number;
    private _places : number;

    constructor(id:number, titre:string, poster:string, trailer:string, trailer2:string, synopsis:string, realisateur:string, acteurs:string[], realisation:string, duree:number, places:number)
    {
        this._id = id;
        this._titre = titre;
        this._poster = poster;
        this._trailer = trailer;
        this._trailer2 = trailer2;
        this._synopsis = synopsis;
        this._realisateur = realisateur;
        this._acteurs = acteurs;
        this._realisation = realisation;
        this._duree = duree;
        this._places = places;
    }

}