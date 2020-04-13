import { Thesis, ResultSetup, Result, EventData } from './../../Classes';

export class MatchMakingFactory {

    data? : EventData;
    theses : Thesis[] = [];
    users : number[][] = [];



    addGroup(users: number) {
        const group =  Array.apply(new Array(users).map(num => num));
     //   this.users.push(group);
    };

    addThesis(entropy: number[]) {
        const num = this.theses.length;

        const thesis : Thesis = {
            text: "thesis_" + num,
            entropy
        }
        this.theses.push(thesis);
    };

    create() {
        const setup : ResultSetup = {
            theses : this.theses,
            users : this.users
        };
        this.data = new EventData(setup);
        return this.data;
    }

    clear() {
        this.data = undefined;
        this.theses = [];
        this.users = [];
    }
};
