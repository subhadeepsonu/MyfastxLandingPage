import { Button } from "./ui/button";

export default function Navbar(){
    return <div className="w-10/12 h-20  flex justify-between items-center">
        <div className="flex justify-center items-center">
            <p className="font-bold">MyFast</p>
            <p className="font-bold text-green-500 text-lg">X</p>
            <img src="https://s3-alpha-sig.figma.com/img/7d8b/18cf/e1c37cf0e56286920a12de54400b8912?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OsolmTvnFe~zMNAVx2GZA~5RxNKArLa9s-bTr9V19~b0gGDTp1QNjwIqRkcfas-~uFZb4C~CTKAV0h~47YlUK~KJ0G1~ChcBaU7Zsj6Ontuj1PI9rRuvareUmmkvRd-30bfa9lEOmCFlUXK6z7zJQyQ4163Jl1iYX7xgn1bBnLNZkXH8a5UgJukgCcMynJjWRN5ljl-HWAYufnG5Ohy4Pug1yyFrZqGo0TSWGZHnQIVcl0gEgegarbcl-QvFr3A8iTgY4-~o5dOBXWoTBca1mSzIf6Crf4~dKrFR5GRcvt~bY--KZ6ZLq3atr~jZrrmXGJGEUbXiqSlsbHIZas6h3Q__"></img>
            <p className="font-bold text-xs">Partner</p>
        </div>
        <div className=" w-[350px] flex justify-around items-center">
            <Button className="w-40 bg-black">Sign Up</Button>
            <Button className="w-40 bg-black">Login</Button>
        </div>
    </div>
}