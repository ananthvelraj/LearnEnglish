export type VerbType = {
  name: string;
  tamil: string;
  explanation: string;
  example: string;
  exampleTamil: string;
  emoji: string;
};

export type VerbFormExplanation = {
  form: string;
  name: string;
  tamil: string;
  rule: string;
  example: string;
};

export type VerbForm = {
  tamil: string;
  v1: string;
  v2: string;
  v3: string;
  v4: string;
  v5: string;
};

export const verbTypes: VerbType[] = [
  { name: 'Action Verb', tamil: 'செயல் வினைச்சொல்', explanation: 'ஒரு செயலைக் குறிக்கும் வினைச்சொல்.', example: 'She writes a letter.', exampleTamil: 'அவள் ஒரு கடிதம் எழுதுகிறாள்.', emoji: '🏃' },
  { name: 'Helping Verb', tamil: 'துணை வினைச்சொல்', explanation: 'முக்கிய வினைச்சொல்லுக்கு காலம் அல்லது நிலையைத் தெரிவிக்க உதவும்.', example: 'She is writing.', exampleTamil: 'அவள் எழுதிக்கொண்டிருக்கிறாள்.', emoji: '🤝' },
  { name: 'Linking Verb', tamil: 'இணைப்பு வினைச்சொல்', explanation: 'எழுவாயை அதன் தன்மை அல்லது நிலையுடன் இணைக்கும்.', example: 'The flower is beautiful.', exampleTamil: 'அந்த மலர் அழகாக இருக்கிறது.', emoji: '🔗' },
  { name: 'Transitive Verb', tamil: 'செயப்படுபொருள் குன்றா வினை', explanation: 'செயலைப் பெற ஒரு object தேவைப்படும் வினைச்சொல்.', example: 'I opened the door.', exampleTamil: 'நான் கதவைத் திறந்தேன்.', emoji: '➡️' },
  { name: 'Intransitive Verb', tamil: 'செயப்படுபொருள் குன்றிய வினை', explanation: 'object இல்லாமலேயே முழுப் பொருள் தரும் வினைச்சொல்.', example: 'The baby sleeps.', exampleTamil: 'குழந்தை தூங்குகிறது.', emoji: '🌙' },
  { name: 'Regular Verb', tamil: 'ஒழுங்கான வினைச்சொல்', explanation: 'V2, V3 வடிவங்களில் பொதுவாக “-ed” சேரும்.', example: 'Work → worked → worked', exampleTamil: 'வேலை செய் → வேலை செய்தார்', emoji: '✅' },
  { name: 'Irregular Verb', tamil: 'ஒழுங்கற்ற வினைச்சொல்', explanation: 'V2, V3 வடிவங்கள் விதிப்படி அல்லாமல் மாறும்.', example: 'Go → went → gone', exampleTamil: 'போ → சென்றார் → சென்றிருக்கிறார்', emoji: '🔄' },
  { name: 'Modal Verb', tamil: 'முறைத் துணை வினைச்சொல்', explanation: 'திறன், அனுமதி, கடமை அல்லது வாய்ப்பைக் காட்டும்.', example: 'I can speak English.', exampleTamil: 'என்னால் ஆங்கிலம் பேச முடியும்.', emoji: '💡' },
];

export const verbFormExplanations: VerbFormExplanation[] = [
  { form: 'V1', name: 'Base / Present', tamil: 'அடிப்படை / நிகழ்கால வடிவம்', rule: 'I, You, We, They உடனும் can, will, must, to ஆகியவற்றுக்குப் பின்னும் V1 வரும்.', example: 'I go. · They eat. · I can speak.' },
  { form: 'V2', name: 'Simple Past', tamil: 'எளிய கடந்தகால வடிவம்', rule: 'ஏற்கனவே முடிந்த செயலைச் சொல்ல V2 பயன்படுத்துகிறோம். எல்லா subject-களுடனும் ஒரே வடிவம்.', example: 'I went yesterday. · She ate rice.' },
  { form: 'V3', name: 'Past Participle', tamil: 'கடந்தகால வினையெச்ச வடிவம்', rule: 'have, has, had ஆகியவற்றுக்குப் பின்னும் passive sentence-களிலும் V3 வரும்.', example: 'I have gone. · The letter was written.' },
  { form: 'V4', name: '-ing Form', tamil: 'தொடர்ச்சியான செயல் வடிவம்', rule: 'நடந்துகொண்டிருக்கும் செயலைச் சொல்ல am, is, are, was, were ஆகியவற்றுக்குப் பின் V4 வரும்.', example: 'She is reading. · They were playing.' },
  { form: 'V5', name: 's / es Form', tamil: 'ஒருமை நிகழ்கால வடிவம்', rule: 'நிகழ்காலத்தில் He, She, It அல்லது ஒருமை பெயர்ச்சொல்லுடன் V5 வரும்.', example: 'He goes. · She studies. · It works.' },
];

export const verbForms: VerbForm[] = [
  { tamil: 'போ', v1: 'go', v2: 'went', v3: 'gone', v4: 'going', v5: 'goes' },
  { tamil: 'வா', v1: 'come', v2: 'came', v3: 'come', v4: 'coming', v5: 'comes' },
  { tamil: 'சாப்பிடு', v1: 'eat', v2: 'ate', v3: 'eaten', v4: 'eating', v5: 'eats' },
  { tamil: 'குடி', v1: 'drink', v2: 'drank', v3: 'drunk', v4: 'drinking', v5: 'drinks' },
  { tamil: 'எழுது', v1: 'write', v2: 'wrote', v3: 'written', v4: 'writing', v5: 'writes' },
  { tamil: 'படி', v1: 'read', v2: 'read', v3: 'read', v4: 'reading', v5: 'reads' },
  { tamil: 'பேசு', v1: 'speak', v2: 'spoke', v3: 'spoken', v4: 'speaking', v5: 'speaks' },
  { tamil: 'பார்', v1: 'see', v2: 'saw', v3: 'seen', v4: 'seeing', v5: 'sees' },
  { tamil: 'செய்', v1: 'do', v2: 'did', v3: 'done', v4: 'doing', v5: 'does' },
  { tamil: 'வைத்திரு / உள்ளது', v1: 'have', v2: 'had', v3: 'had', v4: 'having', v5: 'has' },
  { tamil: 'உருவாக்கு', v1: 'make', v2: 'made', v3: 'made', v4: 'making', v5: 'makes' },
  { tamil: 'எடு', v1: 'take', v2: 'took', v3: 'taken', v4: 'taking', v5: 'takes' },
  { tamil: 'கொடு', v1: 'give', v2: 'gave', v3: 'given', v4: 'giving', v5: 'gives' },
  { tamil: 'பெறு', v1: 'get', v2: 'got', v3: 'got', v4: 'getting', v5: 'gets' },
  { tamil: 'கொண்டுவா', v1: 'bring', v2: 'brought', v3: 'brought', v4: 'bringing', v5: 'brings' },
  { tamil: 'வாங்கு', v1: 'buy', v2: 'bought', v3: 'bought', v4: 'buying', v5: 'buys' },
  { tamil: 'கற்பி', v1: 'teach', v2: 'taught', v3: 'taught', v4: 'teaching', v5: 'teaches' },
  { tamil: 'கற்றுக்கொள்', v1: 'learn', v2: 'learned', v3: 'learned', v4: 'learning', v5: 'learns' },
  { tamil: 'ஓடு', v1: 'run', v2: 'ran', v3: 'run', v4: 'running', v5: 'runs' },
  { tamil: 'நட', v1: 'walk', v2: 'walked', v3: 'walked', v4: 'walking', v5: 'walks' },
  { tamil: 'உட்கார்', v1: 'sit', v2: 'sat', v3: 'sat', v4: 'sitting', v5: 'sits' },
  { tamil: 'நில்', v1: 'stand', v2: 'stood', v3: 'stood', v4: 'standing', v5: 'stands' },
  { tamil: 'தூங்கு', v1: 'sleep', v2: 'slept', v3: 'slept', v4: 'sleeping', v5: 'sleeps' },
  { tamil: 'விழித்தெழு', v1: 'wake', v2: 'woke', v3: 'woken', v4: 'waking', v5: 'wakes' },
  { tamil: 'நினை', v1: 'think', v2: 'thought', v3: 'thought', v4: 'thinking', v5: 'thinks' },
  { tamil: 'தெரிந்திரு', v1: 'know', v2: 'knew', v3: 'known', v4: 'knowing', v5: 'knows' },
  { tamil: 'சொல்', v1: 'tell', v2: 'told', v3: 'told', v4: 'telling', v5: 'tells' },
  { tamil: 'கூறு', v1: 'say', v2: 'said', v3: 'said', v4: 'saying', v5: 'says' },
  { tamil: 'கண்டுபிடி', v1: 'find', v2: 'found', v3: 'found', v4: 'finding', v5: 'finds' },
  { tamil: 'வை / காப்பாற்று', v1: 'keep', v2: 'kept', v3: 'kept', v4: 'keeping', v5: 'keeps' },
  { tamil: 'உதவு', v1: 'help', v2: 'helped', v3: 'helped', v4: 'helping', v5: 'helps' },
  { tamil: 'சமை', v1: 'cook', v2: 'cooked', v3: 'cooked', v4: 'cooking', v5: 'cooks' },
  { tamil: 'விளையாடு', v1: 'play', v2: 'played', v3: 'played', v4: 'playing', v5: 'plays' },
  { tamil: 'வேலை செய்', v1: 'work', v2: 'worked', v3: 'worked', v4: 'working', v5: 'works' },
  { tamil: 'வாழ்', v1: 'live', v2: 'lived', v3: 'lived', v4: 'living', v5: 'lives' },
  { tamil: 'அழை', v1: 'call', v2: 'called', v3: 'called', v4: 'calling', v5: 'calls' },
  { tamil: 'திற', v1: 'open', v2: 'opened', v3: 'opened', v4: 'opening', v5: 'opens' },
  { tamil: 'மூடு', v1: 'close', v2: 'closed', v3: 'closed', v4: 'closing', v5: 'closes' },
  { tamil: 'கழுவு', v1: 'wash', v2: 'washed', v3: 'washed', v4: 'washing', v5: 'washes' },
  { tamil: 'படி / கல்', v1: 'study', v2: 'studied', v3: 'studied', v4: 'studying', v5: 'studies' },
  { tamil: 'முயற்சி செய்', v1: 'try', v2: 'tried', v3: 'tried', v4: 'trying', v5: 'tries' },
];
