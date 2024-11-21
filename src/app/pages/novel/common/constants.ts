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

export const storySegments: Story[] = [intro, arrival, passes, terminal];
