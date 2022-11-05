export class Reward {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public points: number

    constructor(id: number, name: string, desc: string, imagePath: string, points: number) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.points = points

    }
}