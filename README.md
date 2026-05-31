# wd-assign02

WEBSITE STRUCTURE
index.html
  The home page. Introduces the Gordito platform, its purpose,        
  target users, and services offered. Includes a hero section         
  with a call-to-action button linking to the reservation page.        

restaurants.html
  Lists all six restaurants available on the platform. Each
  restaurant displays its name, cuisine type, description,
  signature dishes with prices, price range, deposit amount,
  and an image.

recommend.html
  A recommendation form where users select their dietary
  preference, budget range, and dining purpose. JavaScript
  evaluates the selections and recommends a suitable restaurant.
  A link to the reservation page is provided with the restaurant
  pre-selected.
                                                                                                            (DISCLAIMER I DIDNT ADD TAGS/IN CODE MESSAGES BECAUSE I CANT READ AND I DIDNT NOTICE YOU NEEDED TO UNTIL I 
                                                                                                            SHOWED MY TUTOR AN UNFINISHED VERSION OF THIS A FEW DAYS BACK (sorry :p) 
register.html
  A user registration form. JavaScript validates all fields
  before submission.

reservation.html
  A reservation form where users can book a table. The deposit
  amount updates automatically based on the selected restaurant.
  Payment method fields show and hide dynamically. A link from
  the recommendation page pre-fills the restaurant selection.

JAVASCRIPT VALIDATION LOGIC
Registration Form (register.html):
  - Username must not be empty, must be at least 5 characters,
    and can only contain letters, numbers, and underscores.
  - Email must not be empty and must be in a valid email format.
  - Phone number must not be empty and must be between 8 and
    15 digits containing only numbers.
  - Password must be at least 10 characters and must contain
    at least one uppercase letter, one lowercase letter, one
    number, and one special character.
  - Confirm password must match the password field.
  - Gender must be selected.
  - Country/Region must not be empty.
  - If any errors are found, they are displayed in a list above
    the form and submission is blocked until all are resolved.

Reservation Form (reservation.html):
  - Full name, email, phone, restaurant, date, time, and number
    of people are all required.
  - Email must be in a valid format.
  - Phone must be at least 10 digits.
  - Reservation date cannot be in the past.
  - Number of people must be at least 1.
  - Payment method must be selected.
  - If Voucher is selected, a voucher code field is shown and
    must not be empty.
  - If Online Payment is selected, a credit card field is shown.
    The card number must be 15 digits or 16 digits (card brand stuff idk)
  - The deposit amount updates automatically when a restaurant
    is selected.
  - The billing email field can be auto-filled by ticking the
    "Same as email address" checkbox.

Recommendation Logic (recommend.html):
  - If the user selects Halal and a high budget, Ho Siak is
    recommended.
  - If the user selects Halal, Vegan, or Vegetarian, Tond-oo
    is recommended.
  - If the user selects a high budget with a date or business
    purpose, Kuishinbō is recommended.
  - If the user selects a low budget with a family purpose,
    Queso y Carne is recommended.
  - If the user selects a medium budget with a family purpose,
    3 Kingdoms is recommended.
  - Otherwise, Landro is recommended as the default.

KNOWN ISSUES / LIMITATIONS
  - No backend or database is used. Registration and reservation
    forms submit to Murcury
  - Credit card validation checks format only. No real payment
    processing occurs.

REFERENCES
i got all my images from Pexels 
