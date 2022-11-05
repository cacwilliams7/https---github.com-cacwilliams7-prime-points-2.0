export class Badge {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public earnedDate: string

    constructor(id: number, name: string, desc: string, imagePath: string, earnedDate: string) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.earnedDate = earnedDate

    }
}