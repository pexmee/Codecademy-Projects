// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number,array) => {
    
    return {
        specimenNum: number,
        dna: array,
        
        mutate (){
            let randBase = returnRandBase();
            const randI = Math.floor(Math.random()*(this.dna.length));
            while(this.dna[randI] === randBase){
                randBase = returnRandBase();
            }
            this.dna[randI] = randBase;
            return this.dna;
        },

        compareDNA (pAequor){
            let cnt = 0;
            for(let i = 0; i < this.dna.length; ++i){
    
                if(this.dna[i] === pAequor.dna[i]){
                    ++cnt;
                }
            }

            console.log(`Specimen #1 and specimen #2 have ${cnt === 0 ? 0 : (cnt/4)*100}% DNA in common.`);
        },

        willLikelySurvive () {
            let cnt = 0;
            for(let i = 0; i < this.dna.length; ++i){
                if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                    ++cnt;
                }
            }
            const result = cnt === 0 ? 0 : (cnt/4)*100;
            return result > 60;
        }
    };
};
const a = pAequorFactory(5,['A','T','C','G']);
const b = pAequorFactory(6,['A','T','C','G'])
b.mutate();

b.compareDNA(a);
console.log(b.dna);
console.log(b.willLikelySurvive());
let arr = [];

for(let i = 0; i < 30; ++i){
    arr.push(pAequorFactory(1,[returnRandBase(),returnRandBase(),returnRandBase(),returnRandBase()]));
}
console.log(arr);




