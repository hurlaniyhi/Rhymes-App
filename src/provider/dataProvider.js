const dataProvider = {
    letterRows: [
        {
            ImageUrl: [require("../../assets/images/letters/a.png"), require("../../assets/images/letters/b.png"), require("../../assets/images/letters/c.png")],
            colors: ["rgba(0, 255, 133, 0.25)", "rgba(255, 0, 92, 0.25)", "rgba(128, 0, 255, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/sounda.mp3'), require('../../assets/backgroundSong/soundb.mp3'), require('../../assets/backgroundSong/soundc.mp3')],
            letters: [require("../../assets/images/circle-letters/Group.png"), require("../../assets/images/circle-letters/Group-1.png"), require("../../assets/images/circle-letters/Group-2.png")],
            duration: ["00:24", "00:26", "00:23"],
            letterImages: [
                [require("../../assets/images/letterImages/apples.png"), require("../../assets/images/letterImages/abacus1.png"), require("../../assets/images/letterImages/ant.png"), require("../../assets/images/letterImages/antelope.png")], 
                [require("../../assets/images/letterImages/ball.png"), require("../../assets/images/letterImages/bus.png"), require("../../assets/images/letterImages/box.png")],
                [require("../../assets/images/letterImages/cage.png"), require("../../assets/images/letterImages/cake.png"), require("../../assets/images/letterImages/cane.png")]
            ],
            moreDetails: [
                {interval: 4000, imageNumber: 4, meaning: ["a as in apple", "a as in abacus", "a as in ant", "a as in antelope"]},
                {interval: 5000, imageNumber: 3, meaning: ["b as in ball", "b as in bus", "b as in box"]},
                {interval: 4500, imageNumber: 3, meaning: ["c as in cage", "c as in cake", "c as in cane"]}
            ]
        },
        {
            ImageUrl: [require("../../assets/images/letters/d.png"), require("../../assets/images/letters/e.png"), require("../../assets/images/letters/f.png")],
            colors: ["rgba(255, 168, 0, 0.25)", "rgba(255, 245, 0, 0.25)", "rgba(0, 255, 224, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/soundd.mp3'), require('../../assets/backgroundSong/sounde.mp3'), require('../../assets/backgroundSong/soundf.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-3.png"), require("../../assets/images/circle-letters/Group-4.png"), require("../../assets/images/circle-letters/Group-5.png")],
            duration: ["00:28", "00:25", "00:26"],
            letterImages: [
                [require("../../assets/images/letterImages/dock.png"), require("../../assets/images/letterImages/dress.png"), require("../../assets/images/letterImages/door.png")], 
                [require("../../assets/images/letterImages/egg.png"), require("../../assets/images/letterImages/elbow.png")],
                [require("../../assets/images/letterImages/fish.png"), require("../../assets/images/letterImages/fox.png")]
            ],
            moreDetails: [
                {interval: 5000, imageNumber: 3, meaning: ["d as in dock", "d as in dress", "d as in door"]},
                {interval: 6000, imageNumber: 2, meaning: ["e as in egg", "e as in elbow"]},
                {interval: 6000, imageNumber: 2, meaning: ["f as in fish", "f as in fox"]}
            ]
        },
        {
            ImageUrl: [require("../../assets/images/letters/g.png"), require("../../assets/images/letters/h.png"), require("../../assets/images/letters/i.png")],
            colors: ["rgba(173, 255, 0, 0.25)", "rgba(204, 0, 255, 0.25)", "rgba(0, 148, 255, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/soundg.mp3'), require('../../assets/backgroundSong/soundh.mp3'), require('../../assets/backgroundSong/soundi.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-6.png"), require("../../assets/images/circle-letters/Group-7.png"), require("../../assets/images/circle-letters/Group-8.png")],
            duration: ["00:21", "00:21", "00:24"],
            letterImages: [
                [require("../../assets/images/letterImages/globe.png"), require("../../assets/images/letterImages/gate.png")], 
                [require("../../assets/images/letterImages/hen.png"), require("../../assets/images/letterImages/helmet.png"), require("../../assets/images/letterImages/head.png")],
                [require("../../assets/images/letterImages/indomie.png"), require("../../assets/images/letterImages/ink.png")]
            ],
            moreDetails: [
                {interval: 6000, imageNumber: 2, meaning: ["g as in globe", "g as in gate"]},
                {interval: 4000, imageNumber: 3, meaning: ["h as in hen", "h as in helmet", "h as in head"]},
                {interval: 6000, imageNumber: 2, meaning: ["i as in indomie", "i as in ink"]}
            ]
        },
        {
            ImageUrl: [require("../../assets/images/letters/j.png"), require("../../assets/images/letters/k.png"), require("../../assets/images/letters/l.png")],
            colors: ["rgba(0, 255, 133, 0.25)", "rgba(128, 0, 255, 0.25)", "rgba(255, 0, 92, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/soundj.mp3'), require('../../assets/backgroundSong/soundk.mp3'), require('../../assets/backgroundSong/soundl.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-9.png"), require("../../assets/images/circle-letters/Group-10.png"), require("../../assets/images/circle-letters/Group-11.png")],
            duration: ["00:23", "00:25", "00:24"],
            letterImages: [
                [require("../../assets/images/letterImages/judge.png"), require("../../assets/images/letterImages/jug.png")], 
                [require("../../assets/images/letterImages/keg.png"), require("../../assets/images/letterImages/kettle.png")],
                [require("../../assets/images/letterImages/lamp.png"), require("../../assets/images/letterImages/lollpop.png"), require("../../assets/images/letterImages/lion.png")]
            ],
            moreDetails: [
                {interval: 5500, imageNumber: 2, meaning: ["j as in judge", "j as in jug"]},
                {interval: 5000, imageNumber: 2, meaning: ["k as in keg", "k as in kettle"]},
                {interval: 4000, imageNumber: 3, meaning: ["l as in lamp", "l as in lollpop", "l as in lion"]}
            ]
        },
        {
            ImageUrl: [require("../../assets/images/letters/m.png"), require("../../assets/images/letters/n.png"), require("../../assets/images/letters/o.png")],
            colors: ["rgba(0, 255, 224, 0.25)", "rgba(255, 245, 0, 0.25)", "rgba(255, 168, 0, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/soundm.mp3'), require('../../assets/backgroundSong/soundn.mp3'), require('../../assets/backgroundSong/soundo.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-12.png"), require("../../assets/images/circle-letters/Group-13.png"), require("../../assets/images/circle-letters/Group-14.png")],
            duration: ["00:24", "00:26", "00:24"],
            letterImages: [
                [require("../../assets/images/letterImages/milk.png"), require("../../assets/images/letterImages/muffin.png"), require("../../assets/images/letterImages/motocycle.png")], 
                [require("../../assets/images/letterImages/niddle.png"), require("../../assets/images/letterImages/net.png")],
                [require("../../assets/images/letterImages/ostrich.png"), require("../../assets/images/letterImages/octopus.png"), require("../../assets/images/letterImages/oxygen.png")]
            ],
            moreDetails: [
                {interval: 4000, imageNumber: 3, meaning: ["m as in milk", "m as in muffins", "m as in motorcycle"]},
                {interval: 5000, imageNumber: 2, meaning: ["n as in niddle", "n as in net"]},
                {interval: 4000, imageNumber: 3, meaning: ["o as in ostrich", "o as in octopus", "o as in oxygen"]}
            ]
        },
        {
            ImageUrl: [require("../../assets/images/letters/p.png"), require("../../assets/images/letters/q.png"), require("../../assets/images/letters/r.png")],
            colors: ["rgba(173, 255, 0, 0.25)", "rgba(204, 0, 255, 0.25)", "rgba(0, 148, 255, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/candyCrush.mp3'), require('../../assets/backgroundSong/rhyme_song.mp3'), require('../../assets/backgroundSong/rhyme_song5.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-15.png"), require("../../assets/images/circle-letters/Group-16.png"), require("../../assets/images/circle-letters/Group-17.png")],
            duration: ["00:20", "02:07", "02:13"]
        },
        {
            ImageUrl: [require("../../assets/images/letters/s.png"), require("../../assets/images/letters/t.png"), require("../../assets/images/letters/u.png")],
            colors: ["rgba(0, 255, 133, 0.25)", "rgba(255, 0, 92, 0.25)", "rgba(128, 0, 255, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/rhyme_song2.mp3'), require('../../assets/backgroundSong/rhyme_song3.mp3'), require('../../assets/backgroundSong/rhyme_song4.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-18.png"), require("../../assets/images/circle-letters/Group-19.png"), require("../../assets/images/circle-letters/Group-20.png")],
            duration: ["02:13", "02:07", "02:12"]
        },
        {
            ImageUrl: [require("../../assets/images/letters/v.png"), require("../../assets/images/letters/w.png"), require("../../assets/images/letters/x.png")],
            colors: ["rgba(255, 245, 0, 0.25)", "rgba(255, 168, 0, 0.25)", "rgba(0, 255, 224, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/candyCrush.mp3'), require('../../assets/backgroundSong/rhyme_song.mp3'), require('../../assets/backgroundSong/rhyme_song5.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-21.png"), require("../../assets/images/circle-letters/Group-22.png"), require("../../assets/images/circle-letters/Group-23.png")],
            duration: ["00:20", "02:07", "02:13"]
        },
        {
            ImageUrl: [require("../../assets/images/letters/y.png"), require("../../assets/images/letters/z.png")],
            colors: ["rgba(0, 148, 255, 0.25)", "rgba(173, 255, 0, 0.25)"],
            rhyme: [require('../../assets/backgroundSong/rhyme_song2.mp3'), require('../../assets/backgroundSong/rhyme_song3.mp3')],
            letters: [require("../../assets/images/circle-letters/Group-24.png"), require("../../assets/images/circle-letters/Group-25.png")],
            duration: ["02:13", "02:07"]
        }
    ]
}

export default dataProvider