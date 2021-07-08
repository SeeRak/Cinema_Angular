export class Serie {

    private _id : number;
    private _titre : string;
    private _poster : string;
    private _trailer : string;
    private _synopsis : string;
    private _realisateur : string;

    constructor(id:number, titre:string, poster:string, trailer:string, synopsis:string, realisateur:string)
    {
        this._id = id;
        this._titre = titre;
        this._poster = poster;
        this._trailer = trailer;
        this._synopsis = synopsis;
        this._realisateur = realisateur;
    }

}