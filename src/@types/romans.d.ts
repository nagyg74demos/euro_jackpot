declare module 'romans' {
    function romanize(decimal:number) : string;
    function deromanize(romanStr:string) : number;
    const allChars: string[];
    const allNumerals: number[];
}
