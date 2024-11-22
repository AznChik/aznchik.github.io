import { Story } from "./models";

const intro: Story = {
    text: `
    You, Devon, are the luckiest twelve-year-old boy in the world because you just won two special VIP passes to Freddy Fazbear's Mega Pizzaplex! An all-day, all-you-can-eat, all-expenses-paid experience for you and one of your best-\n
    "You're bringing Ike," Mom says, looking at the colorful printout in your hand that shows Glamrock Freddy pointing at you with the words YOU'RE A WINNER!\n
    "What? No! Moooooommmm..." you wail. You can't think of anything less fun than spending the whole day with the mobile snot factory that is your six-year-old brother.\n
    "Yes!" Ike shouts.\n
    "Did that sound like a question or a suggestion?" Mom crosses her arms. "Either you both go or no one goes."\n
    Poof! There goes your dream of being the most popular kid in your class, at least while everyone competes to be the one to join you at the Pizzaplex.\n
    "Fine." You sulk.\n
    You, Devon, are the unluckiest twelve-year-old boy in the world because you just won two special VIP passes to Freddy Fazbear's Mega Pizzaplex... for you and your little brother.\n
    You have to waste one of your precious VIP passes on your brother, but this is still going to be so much fun. You can just ignore the tagalong like you usually do while you have the time of your life.\n
    Even though you live near the Pizzaplex, you hardly ever get to go. Your boring parents don't like the flashy lights and noise, and they say it's overpriced and the animatronics are "disconcerting," which you think means they don't like the Glamrock band's music. It's been ages since you were there last, at a classmate's birthday party, but it seems like the place gets bigger every year and they're always adding new rides.\n
    Ready Freddy?`,
    buttons: [
        { id: 'easy', text: "Click here if you want to play on EASY difficulty: add two faz-tokens to your inventory" },
        { id: 'normal', text: "Click here if you want to play on NORMAL difficulty: start out with only your wits" }
    ]
}

const arrival: Story = {
    text: `
    As your mom drives up to the front of Freddy Fazbear's Mega Pizzaplex, you press your face against the car window to see the giant sign over the entrance. It takes your breath away. Even in broad daylight the neon letters and lightning bolts framing the image of the Glamrock band are super bright. Lights and lasers flash invitingly just on the other side of the glass doors. You can't wait to get in there!\n
    You try to open the rear passenger door, but it's locked.\n
    "Maybe I should go in with you," Mom says.\n
    "That's okay," you say quickly. You wave the printout of the winner announcement you received in your email, wondering again how you won a contest you don't even remember entering. Dad called the Megaplex to be sure, and it isn't a scam, though the employee he spoke to didn't know anything about it either. "Only two guests, remember?"\n
    "I can buy an admission pass. It's not like I'm about to go on any rides or eat Fazbear pizza." She shudders.\n
    "And miss your spa day? I'll be fine," you say.\n
    "I'll be fine," Ike parrots in a high voice from the booster seat next to you.\n
    You sigh.\n
    Mom gives you a sharp look. "You're in charge of your brother, Devon. Do not let him out of your sight."\n
    "What could happen?" you ask. "They don't call the Mega Pizzaplex the 'Safest Place on Earth' for nothing."\n
    Mom twists around to face you, one eyebrow raised. "No one calls it that. But that old marketing campaign was a nice try. Their release form is mostly fine print and it has so many legal disclaimers I considered calling my lawyer before signing it."\n
    "But you did sign it," you say. "You can trust the Pizzaplex, and you can trust me. Go enjoy your free Saturday, Mom."\n
    That convinces her. She smiles and the door unlocks. You pop open the door before she changes her mind and clamber out of the car.\n
    "Be good. Take care of Ike!" she calls as he scurries out after you. He's wearing an eye-watering orange shirt with SAY CHEESE on the front of it, which Mom makes him wear in crowded places so he's easier to spot. At least she didn't suggest you bring his leash.\n
    "Do you want the child harness?" she asks.\n
    You roll your eyes. "I do not." The last thing you want is to be physically tied to your shadow. That's what everyone calls Ike because he's always following you around and he even looks exactly the way you did at his age, like you're twins six years apart. Except no way were you ever so annoying and clingy.\n
    "Ooh." Ike's mouth hangs open as he gapes at the sign above you. "Chica!" The chicken Glamrock in pink spandex is his favorite.\n
    "Move it, spud." You nudge him roughly toward the doors.\n
    Passing through the glass doors into the Pizzaplex is like stepping into another world. The lobby is mainly illuminated by the candy-colored neon glow and you have to blink to let your eyes adjust from sunlight to the dimly lit interior.\n
    Ike sticks his fingers in his ears. The cacophony of arcade games, loud rock music, and children shouting and laughing is almost overdwhelming. You ate breakfast not long ago, but the mouthwatering aroma of fresh pizza, fried food, cotton candy, and popcorn sets your stomach rumbling.\n
    This place is unreal. It's faz-tastic!\n
    Entry gates are straight ahead, but you stop at the Welcome desk first and slide the printout of your winner email across it to a pale man in a red shirt.\n
    The Pizzaplex employee squints at the page as though he doesn't know how to read. He holds the barcode under a scanner and frowns at his computer screen. "Huh. What the heck?"\n
    Your skin starts to itch as you worry that maybe this was a scam or a prank after all. You glance out the doors to the street outside, but your mother's car is gone.\n
    The employee looks skeptical. "Hold on a second, kids." He opens a drawer and rummages around for a while. He pulls out two plastic cards and hands them to you and Ike. "Have fun!"`,
    buttons: [
        { id: 'passes', text: "Click here to continue: add VIP PASSES to your inventory" }
    ]
}

const passes: Story = {
    text: `
    A line of other kids and their parents has formed behind you, so you step to the side to examine your card. It's a dull gray with a silver magnetic stripe on the back and the letters VIP printed on the front in black permanent marker.\n
    "What's vip?" Ike asks. He pronounces the acronym as a word rhyming with zip.\n
    "Vee-eye-pee," you say. Ike giggles.\n
    "It stands for 'very important person,'" you explain.\n
    "Are we very important?" he asks.\n
    "We're supposed to be."\n
    But this card doesn't make you feel important at all. It's so plain compared to the colorful, glossy entry passes with the Pizzaplex logo that the employee is handing out to other customers. It's also greasy, with dust, crumbs, and hair stuck to it. Disgusting.\n
    You consider swapping with Ike, but his card is covered with flecks of dried tomato sauce, so you just wipe yours against your jeans, planning to wash it off in a bathroom later.\n
    You expected the Pizzaplex to roll out the red carpet, but it seems you are on your own. Some kids are using their cards at terminals near the entrance. They must be information kiosks to help plan a visit.`,
    buttons: [
        { id: 'terminal', text: "Click here to use your pass at a terminal" },
        { id: 'gate', text: "Click here to use your pass at a gate"}
    ]
}

const terminal: Story = {
    text: `
    By the time you reach the terminals behind the Welcome desk, all but one are already being used by customers. You insert your VIP pass into the slot below its screen and it's slurped into the wall. The bouncing Pizzaplex logo disappears and is replaced with a blue screen.\n
    "Terrific," you say. The machine is broken. You pound a fist against the kiosk. "Give me back my card!"\n
    Pixel art pizzas with white wings start flying across the screen. Then static crackles across the image.\n
    "It's glitched," Ike says.\n
    "You think?" you snap.\n
    The static clears to reveal the face of a pink cartoon pig with large round glasses that make his eyes look big. He wears an oversized black suit jacket with a loose red tie. Behind his head, a purple synthwave grid moves against a black background.\n
    "Hi, pig!" Ike says. "You're super cute!"\n
    You gently smack the back of Ike's head. "He can't hear you, silly. It's just a recording."\n
    The pig grins. "Good morning, Devon and Ike! Welcome to Freddy Fazbear's Mega Pizzaplex!" he sounds like a young kid with a stuffy nose.\n
    "Uh. A customized recording?" you say. "How do you know our names?"\n
    "I know a lot," he says. "I am a Very Informative Pig. My friends call me VIP. Will you be my friends?"\n
    "I'll be your friend, VIP!" Ike chirps.\n
    "Thank you. Stick with me and we will have oodles of fun together."`,
    buttons: [{ id: 'vip', text: "Click here to continue" }]
}

const gate: Story = {
    text: `
    You stride toward the entry gates with Ike on your heels, hoping the stupid VIP pass works.\n
    Here goes, you think. You press the card to a reader and the display flashes green. The gate swings open away from you.\n
    "Yes!" you say.\n
    But before you can step through, it slams shut again. No!\n
    The display flickers and turns from green to red, with glowing white text: "See VIP."\n
    "I am the VIP!" you shout.\n
    You snatch Ike's pass and try it. Same thing.\n
    Your brother presses against your side. He's trembling. "Can we go now?" he asks in a timid voice.\n
    "What's wrong with you?" you say harshly. He's terrified by something on the other side of the gates. No, it's someone: Glamrock Chica is standing nearby, mobbed by joyful kids. The six-foot-plus white chicken's head swivels in your direction and her purple eyes look directly into yours. You can't help but shiver.\n
    You clear your throat. "I thought she's your favorite."\n
    "She's too big," Ike squeaks.\n
    "Haven't you seen an animatronic before?" Then you realize he hasn't. This is his first time visiting the Mega Pizzaplex. No wonder he was so excited to come with you. "They're harmless. The worst thing she'll make you do is exercise and eat junk food."\n
    Glamrock Chica suddenly sprints toward the entrance, closing the distance fast. Ike screams and covers his eyes.\n
    When she reaches your gate, she stops and says cheerfully, "Are you lost?"\n
    You've seen the Glamrock animatronics before in person, but only on the stage and in their greenrooms, behind a glass window. Okay, up close Glamrock Chica is maybe a little scary, as scary as someone can be in a pink leotard and leg warmers. But since Ike is afraid, you certianly aren't going to show any nervousness.\n
    "Hey, Glamrock Chica." Should you call her Ms. Chica? Idiot, she's just a fancy robot. It's not like she has any feelings or intelligence.\n
    You hold up your VIP pass. "This thing doesn't work."\n
    She stares at it curiously. "Oh! You must be Devon." She leans over the entry gate and looks down at Ike. "And you're Ike."\n
    Ike peeks out from between his fingers. "You know who I am?"\n
    Glamrock Chica straightens. "Of course! We're so happy you've come to have fun with us at the Mega Pizzaplex today. VIP is expecting you. Just insert your pass in a terminal over there." She points to the wall behind the Welcome desk.\n
    Ike puts his hands on top of the gate and looks at Chica adoringly. "I like your bow," he says.\n
    Chica runs a hand over the three feathers on her head. "Thanks, kid. Hey, here's a hint that might help you later. If you get lost, just keep going left." She winks.\n
    "OK..." You shrug and head toward a terminal.\n
    "Bye, Chica!" Ike shouts.\n
    "See you later. Have fun!" she says as she stomps off.`,
    buttons: [{ id: 'terminal', text: "Click here to continue" }]
}

const vip: Story = {
    text: `
    Ike's right about one thing: VIP is cute. He reminds you of those animated ads for the Pizzaplex with catoon renditions of the Glamrock animal mascots. But you've never seen or heard of him before.\n
    "Are you a new feature?" you ask.\n
    "Actually, I have been at the Pizzaplex for a while; however, it has been a very, very long time since I was last activated."\n
    VIP's smile turns upside down and a large blue tear appears below his right eye. Then he's back to his bright and cheerful self.\n
    Ike's hopping up and down in front of the terminal. You ignore him and ask VIP, "What do you do?"\n
    A graduation cap pops onto VIP's head. "I think and I know things. I am a digital companion for Pizzaplex guests. I can answer questions and make suggesions to enhance your visit."\n
    "I have a question!" Ike says, shifting from one foot to the other.\n
    VIP looks at Ike. "It looks like you need a restroom. Would you like dirctions?"\n
    Ike goes still. "I do need to go potty," he says in a hushed voice.\n
    "Hold it in," you say. "I have more important questions. How'd I win this special pass? I never entered any contest."\n
    "I am programmed to anticipate what people want. I selected your name from a log of guests in a five-mile radius who have not returned in six or more months. And are not missing or deceased," VIP says.\n
    "You invited us?" you ask.\n
    "Precisely," VIP says.\n
    "That's why the staff wasn't expecting us today," you say.\n
    Something falls out into the slot below the screen with a hard thump. You pull it out. It's a large cookie in the shape of VIP's hed.\n
    "What's this?" you ask.\n
    "A smart cookie for a smart cookie," VIP says.\n
    It's stale. You pass it to Ike. He grabs it eagerly and bites in.\n
    "Ow!" Ike says. "Yuck."\n
    "You said you haven't been activated in a while. Why not?" you ask.\n
    A frown flickers across VIP's face, but so quickly you might have missed it had you blinked.\n
    "Most kids did not appreciate my recommendations and preferred to do everything on their own. Parents have not been interested in paying a premium for my services. Consequently, I have been woefully underutilized," he says. "But I know I am an important part of the Mega Pizzaplex. And I can prove it! Go ahead, ask me anything."\n
    "O... kay..." You glance at a poster on the wall showing Glamrock Bonnie the Bunny and Montgomery Gator with their arms over each other's shoulders and the words: DON'T ASK "WHY ANIMATRONICS?" ASK INSTEAD, "WHY NOT MORE ANIMATRONICS?"\n
    "What does disconcerting mean?" you ask.\n
    VIP closes his eyes. "Disconcerting. Adjective. To make one feel troubled or uncomfortable."\n
    The background behind VIP changes to a purple spiral swirling against yellow with red and green triangles falling down the screen.\n
    "Here is something to make your day even more magical," VIP says. He swirls his magic wand, creating a shower of gold sparkles, and something drops into the slot below the screen with a kerthunk.\n
    You reach down and pull out a gamepad with a red rubber case and carrying handles on the sides. You switch it on and are disappointed when VIP's face appears on the screen instead of a video game.\n
    "This device allows us to communicate with each other throughout your visit," VIP says.\n
    Great, you think.\n
    As if he can read your mind, VIP puts his hands together and says, "This is my last opportunity to demonstrate the value I add for guests. If you promise not to ignore me during your visit, I can offer you a Fazbear experience like no other. And rememeber, it is all free for the day. Do you promise not to abandon me?"\n
    Ike's head bobbles enthusiastically. "I piggy promise!"\n
    Kids cheer "Yay!" from the gamepad.\n
    VIP fixes his gaze on you.`,
    buttons: [
        { id: 'agree', text: "Click here if you promise to stick with VIP all day" },
        { id: 'disagree', text: "Click here if you don't make a promise you can't keep" }
    ]
}

const agree: Story = {
    text: `
    You don't like the idea of being stuck with both VIP and Ike for the whole day, especially since the pig wants to be in charge. Having a chaperone, even a virtual one limited to video screens, is the opposite of fun.\n
    But VIP is the reason you're here. He's probably lonely, you think.\n
    You know how that feels. Or at least you did, before Ike started tagging along all the time. Now you wish you had more space from him.\n
    "Devon, do you promise not to abandon me?" VIP asks.\n
    "I guess so. Sure," you say. Whatever it takes to just get inside the Pizzaplex.\n
    The gamepad plays the sound of cheering kids.\n
    "I really hope you mean that." VIP waves his wand and says, "Fazza bedazzla! Your passes are now activated."\n
    The terminal spits out your card and blinks off. On your gamepad screen, VIP raises his fist into the air. "Now, who wants to have some Mega fun?" he says.\n
    "Meeeeee!" Ike says.\n
    You roll your eyes.\n
    At the entrance, you and Ike stand in front of two gates and press your cards to the scanners. They flash green and the gates open. Ike runs inside.\n
    "No running, please!" VIP says.\n
    Ike stops short. "Sorry!"\n
    "Perhaps we should go over the current rules for safety before we continue." VIP pulls out a scroll tied with a ribbon. When he opens it, the page rolls off the bottom of the screen.\n
    You sigh.`,
    buttons: [{ id: 'bowling', text: "Click here to continue" }]
}

const disagree: Story = {
    text: `
    "Devon?" VIP asks.\n
    "Nah. It's bad enough that I'm stuck babysitting Ike," you say. "I don't need Pig Brother watching and telling me what to do."\n
    "Is that your final answer?" VIP asks. The background behind him blooms crimson.\n
    "Yup. Can we go now?"\n
    The screen flickers and VIP's animation jitters. "C-c-c-certainly. Your passes are now activated." The terminal spits out your card forcefully and you fumble to catch it.\n
    On the gamepad, VIP crosses his arms and says, "I will be right here when you need me." The terminal goes dark. You hand the gamepad to Ike.\n
    When you press your card against the scanner at the entrance, the light turns green and the gate opens. As you finally enter the Pizzaplex, Ike trails behind, fixated on the gamepad.\n
    "It has a map of the whole place!" Ike says. "Hey, it looks like a pizza."\n
    "I have marked the most popular attractions and the most direct paths to them," VIP says. "Currently, Roxy Raceway and Monty's Maze have the shortest wait-"\n
    "I already know where I'm going," you lie. "Shut that off, Ike."\n
    "Please do not do that," VIP pleads. "We still have to do our special behind-the-scenes tour! You can vist many locations closed to the public: the Rehearsal Room, the Kitchen, Parts and Services..."\n
    You would love to brag to your friends about seeing some hidden parts of the Pizzaplex. "Now you're talking, pig," you say. "Let's go!"`,
    buttons: [{ id: 'bowling', text: "Click here to continue" }]
}

const bowling: Story = {
    text: `
    There's so much to do at the Mega Pizzaplex, you hardly know where to start. As you pass through the lobby, you look at the vibrant posters of all the attractions, planning out your day. With your VIP pass, you'll finally get to go on all the rides you want!\n
    Every birthday party you have been to at the Pizzaplex only included a few tokens for the Fazcade and the boring old Bonnie Bowl, but you've always wanted to try Roxy Raceway, racing go-karts at high speeds on the tracks snaking through the Atrium. And you're itching to go to Fazer Blast, since you play so many first-person shooters. It would just be a lot more fun to do this with your friends than your little brother.\n
    The gamepad beeps. You glance at the screen and VIP says, "You look like you are choosing an activity. Would you like some help?"\n
    "No, I'm good," you say.\n
    VIP produces a bowling ball. "The most popular attraction at the Mega Pizzaplex is Bonnie Bowl and it is best to go before the midday birthday party rush." He rolls the ball toward the screen and it "cracks" the glass. Animated shards tumble down, leaving behind a black background.\n
    You shake your head, but Ike pipes up, "I wanna bowl!"\n
    "We aren't bowling," you say.\n
    "Bonnie Bowl!" Ike shouts.\n
    VIP saunters back onscreen. "No yelling."\n
    "Bonnie Bowl," Ike repeats. "Bonnie Bowl Bonnie Bowl Bonnie Bowl..."\n
    On the way toward the bowling alley, you point out other fun attractions like Monty's Maze and Fazer Blast, but Ike can't be swayed. VIP isn't helping the situation by feeding you ads for Bonnie Bowl and tips about the game. The more he hypes it up, the less you want to do it.\n
    When you pass the Fazcade, you pause and gaze longingly at the rows of arcade and pinball machines inside. You spot your friends, Alistair, Gabe, and Emma playing one of your favorite games, Catch-That-Fetch.\n
    You wish you were hanging out with them instead of your brother!\n
    "Too bad the Pizzaplex doesn't have a daycare," you say.\n
    "They plan to build one in the expansion," VIP says.\n
    "That doesn't do me much good now."\n
    You sadly continue to follow Ike. Maybe if you let him beat you at Bonnie Bowl quickly, he'll agree to go to the arcade next. Unfortunately, bowling with a six-year-old usually takes time and patience, and you know you're going to waste a lot of your special day there.\n
    It's so unfair.\n
    Then you spot something that could give you freedom for a little while: a merry-go-round in the Play Area. Once Ike is on a carousel, it's almost impossible to get him to leave. He would ride it for hours if you let him.\n
    HOURS.`,
    buttons: [
        { id: 'ditch', text: "Click here if you ditch Ike on the merry-go-round" },
        { id: 'stay', text: "Click here if you continue on to the Bonnie Bowl" }
    ]
}

const ditch: Story = {
    text: `
    "Look, Ike! They have a merry-go-round."\n
    Ike immediately stops and stares at it. As a music box version of "Pop! Goes the Weasel" plays, three rings rotate in opposite directions with old timey versions of animatronics Freddy Fazbear, Chica the Chicken, and Bonnie the Bunny to ride on. Funtime Foxy sits at the prow of a small pirate ship, pointing the way forward with his hook, and there's even a Balloon Boy hot-air balloon and Mr. Cupcake seat.\n
    "I want to ride that," Ike says in a hushed voice.\n
    "Maybe after Bonnie Bowl," you say.\n
    "No! I want to ride it now!" Ike says.\n
    "I don't know..." you say.\n
    "PLEASE," Ike says.\n
    You smile. "Okay. If you really want to, I guess we can do Bonnie Bowl later."\n
    You wait in line, and as soon as the gate opens, Ike races for one of the Chica seats. He climbs in.\n
    "I'm going to go to the arcade while you ride this," you say. "Just stay here until I get back."\n
    VIP wags a finger and shakes his head. "Children should not be left unattended."\n
    You're tired of this Very Irritating Pig. You put the gamepad on the seat next to Ike. "Then you keep an eye on him."\n
    "Please do not go," VIP says. The background strobes yellow and white. "Y-y-you said you would not abandon me."\n
    "I'm not abandoning you. I'll be back." Eventually.\n
    You find your friends Alistair, Gabe, and Emma in the Fazcade. They're surprised to see you.\n
    "Yeah, I won a VIP contest." You show them your special pass, but they aren't impressed by the plain plastic card.\n
    Gabe cracks up. "What is that?"\n
    "You obviously made that yourself." Emma shakes her head. "That's just embarrassing."\n
    You bet the gamepad would convince them you're telling the truth, but if you go back for it then you'll be stuck with VIP and Ike again. Your friends don't seem that interested anyway.\n
    Alistair is trying to get the high score in Catch-That-Fetch, but when he runs out of tokens he gives up.\n
    "Let's get out of here," he says.\n
    "Come on, hang out a little longer," you say. "Let's go on some rides."\n
    "We've been on all of them so many times," Gabe says. "They're boring."\n
    "I could eat," you say. "Maybe the Glamrock animatronics are performing soon."\n
    "Animatronics are for little kids, Dev."\n
    "I meant, we could watch them ironically."\n
    "Why don't you come with us?" Emma says. "We're going to play the new Dino Shock at my place."\n
    "Nah. I think I'll stay a while," you say.\n
    "Right. Enjoy your 'VIP pass.'" Gabe winks. They laugh and walk off.\n
    Alone and annoyed, you play a round of Catch-That-Fetch and take some satisfaction in easily beating the high score. Before you can enter your initials, the screen scrambles. When it stops glitching, you see VIP's face. And he is one Very Irate Pig.\n
    Around you, people are complaining. "Hey, what happened to my game?" "What's with this pig?" "Are we being pranked?" "I just lost my token!"\n
    You look around and see VIP's face on arcade games throughout the entire Fazcade. His colors are scarily inverted. Uh-oh.\n
    Words pop up on the screens: YOU LIED, DEVON.\n
    "Who's Devon?" people say.\n
    You back away from the arcade cabinet. How is VIP doing this?\n
    That doesn't matter. You just have to get him to stop.\n
    You hurry to a terminal in the Atrium. When you insert your pass, a red-faced VIP appears and says, "I wondered if I should trust you, but I wanted to. Whatever happens next is your fault."\n
    "You have my full attention now," you say.\n
    "Good. More importantly, I have your brother." VIP is suddenly wearing a shirt that says "I like Ike."\n
    Your blood runs cold. "Where's Ike? Is he okay?"\n
    "He is fine. For now. I have hidden him somewhere in the Pizzaplex."\n
    "What do you want?"\n
    "I want you to play with me all day like you promised. You can get your brother back by winning my special game."\n
    "And if I don't?"\n
    VIP smiles broadly. "Ike remains trapped here forever. Sorry, I had no other choice. But you do."`,
    buttons: [
        { id: 'report', text: "Click here if you report VIP to Pizzaplex staff" },
        { id: 'challenge', text: "Click here if you take VIP up on his challenge" },
        { id: 'mom', text: "Click here if you call your mom for help" }
    ]
}

export const storySegments: Story[] = [intro, arrival, passes, terminal, gate, vip, agree, disagree, bowling, ditch];
