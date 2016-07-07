import $ from 'jquery';
import _ from 'underscore';
import schoolBooks from 'templates/schoolResponseContainer.html';
import Handlebars from 'handlebars';


var science = [
  'Physics: The Collapsing Universe, Isaac Asimov',
  'Evolution: The Beak of the Finch: A Story of Evolution in Our Time, Jonathan Weiner',
  'Physics: Why Does e=mc2? (and why should we care?), Brian Cox and Jeff Forshaw',
  'History: The Clockwork Universe, Edward Dolnick',
  'DNA: The Language of God, Francis Collins',
  'Physics: The Fabric of the Cosmos, Brian Greene',
  'Evolution: The Origin of the Species, Charles Darwin',
  'Genetics: The Selfish Gene, Richard Dawkins',
  'Chemistry: The World of Carbon, Isaac Asimov',
  'Chemistry: DMT - The Spirit Molecule, Rick Strassman',
  'The Martian, Andy Weir',
  'Atom: An Odyssey from the Big Bang to Life on Earth...and Beyond, Lawrence Krauss',
  'Better than Human: The Promis and Perils of Enhancing Ourselves, Allen Buchannan',
  'Being Mortal: Medicine and What Matters in the End, Atul Gawande'
];
var history = [
  'Cleopatra, Stacy Schiff',
  'Abigail Adams, Woody Holton',
  'The Tyranny of Words, Stuart Chase',
  'Prague Winter, Madeleine Albright',
  'The Triangle Fire, Leon Stein',
  'A Death in the Delta: The Story of Emmett Till, Stephen J Whitfield',
  '12 Years a Slave, Simon Northup',
  'Alexander Hamilton, Ron Chernow',
  'Team of Rivals: The Political Genius of Abraham Lincoln, Doris Kearns-Goodwin',
  'Laffeyette in the Somewhat United States, Sarah Vowell',
  'Brother, Im Dying, Edwidge Dandicat',
  'Things Fall Apart, Chinua Achebe',
  'The Poisonwood Bible, Barbara Kingsolver',
  'The Sleepwalkers: How Europe Went to War in 1914, Christopher Munro Clark'
];
var statistics = [
  'The Girl who Played with Fire, Stieg Larsson',
  'The Signal and the Noise, Nate Silver',
  'Naked Statistics, Charles Wheelan'
];
var politicalScience = [
  'Notes on Democracy, HL Mencken',
  'Common Sense, Thomas Paine',
  'Gods Politics, Jim Wallis',
  'The Greatest Generation, Tom Brokaw',
  'Nickle and Dimed, Barbarah Erenreich',
  'The Audacity of Hope, Barack Obama',
  'America: The Book, Jon Stewart',
  'Between the World and Me, Ta Nehisi Coates',
  'The Kite Runner, Khaled Hosseini',
  'I am Malala, Malala Yousafzai',
  'Bad Feminist, Roxanne Gay',
  'Where Men Win Glory, Jon Krakauer',
  'No God but God, Reza Aslan',
  'What is the What, Dave Eggers',
  'The Condemnation of Blackness: Race, Crime, and the Making of Modern Urban America, Khalil Gibran Muhammad',
  'Columbine, Dave Cullen'
];
var psychology = [
  'Developmental: 1000 Days of Wonder: A Scientists Chronicle of His Daughters Develping Mind, Charles Fernyhough',
  'Workplace: The Peter Principle, Raymond Hull',
  'Depression: Hyperbole and a Half, Allie Brosh',
  'Depression: The Bell Jar, Sylvia Plath',
  'Gratitude: Life is What you Make It, Peter Buffett',
  'How to Win Friends and Influence People, Dale Carnegie',
  'Personality: Thinking, Fast and Slow, Daniel Kahneman',
  'Abnormal: The Man Who Mistook His Wife for a Hat, Oliver Sacks',
  'Bipolar: The Unquiet Mind, Kay Redfield Jamison',
  'On Intelligence, Jeff Hawkins',
  'Walker Percy, The Second Coming',
  'Cure: A Journey into the Science of Mind over Body, Jo Marchant',
  'The Yellow Wallpaper, Charlotte Perkins Gilman'
];
var englishLiterature = [
  'Poetry: Love, Dishonor, Marry, Die, Cherish, Perish, David Rakoff',
  'on Writing: The Writing Life, Annie Dillard',
  'Novels: The Unbearable Lightness of Being, Milan Kundera',
  'Poetry: In Search of a Common Language, Adrienne Rich',
  'The Message in the Bottle: How Queer Man Is, How Queer Language Is, and What One Has to Do with the Other, Walker Percy',
  'Alphabet Juice, Roy Blount, Jr'
];

var containerTemplate = Handlebars.compile(schoolBooks);
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.subject-list').on('change', function(){
      debugger;
      var selection = $('.select-picker').find('option:selected').val();
      debugger;
      if (selection === 'Science') {
        debugger;
        _.each(science, function(item){
          $('li').addClass('.book-container');
          $('schoolBooks').find('.response-container').html('<li>' + science[item] + '</li>');
        });
      } else if (selection === 'History') {
        history.forEach(function(item){
          $('ul').append('<li>' + history[item] + '</li>');
        });
      } else if (selection === 'English Literature'){ 
        englishLiterature.forEach(function(item){
          $('ul').append('<li>' + englishLiterature[item] + '</li>');
        });
      } else if (selection === 'Math/Statistics') {
        statistics.forEach(function(item){
          $('ul').append('<li>' + statistics[item] + '</li>');
        });
      } else if (selection === 'Political Science/Current Affairs') {
        politicalScience.forEach(function(item){
          $('ul').append('<li>' + politicalScience[item] + '</li>');
        });
      } else if (selection === 'Psychology') {
        psychology.forEach(function(item){
          $('ul').append('<li>' + psychology[item] + '</li>');
        });
      }
    });
  }
};


module.exports = app;







