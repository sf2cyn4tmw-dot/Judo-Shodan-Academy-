/* Judo Academy original teaching cues. Reviewed against IJF Academy teaching
   progression and Teizo Kawamura's combination collection. These are example
   right-side, same-stance entries, not exact prescriptions for every body/grip.
   Always practice under a qualified judo instructor. */
'use strict';
window.JUDO_ENTRIES = (() => {
  const guide=(id,setup,path,steps,mistake,reference='kawamura')=>({id,setup,path,steps,mistake,reference});
  const step=(title,hands,feet,timing)=>({title,hands,feet,timing});
  const guides={
    'ou-tai':guide('ou-tai','Right vs right; right lapel grip and left sleeve grip. Uke steps forward after withdrawing from an inner reap.', ['Right leg: inner reap','Right foot: recover','Left foot: pivot · right leg: place'],[
      step('Make a real O uchi attack','Keep left sleeve hand attached; lapel hand presses uke toward the rear corner.','Step in close and reap with the right inner leg, keeping your left foot beneath your balance.','Uke must respond to a believable rearward attack.'),
      step('Recover as uke comes forward','Change both hands from backward pressure to drawing the sleeve forward and rotating the lapel hand.','Withdraw the right reaping foot under your center. Turn on the balls of your feet with the left foot as the main pivot.','Enter while uke steps or leans forward to recover.'),
      step('Complete Tai otoshi','Keep sleeve moving toward the front corner and connect the lapel-side shoulder turn.','Clear your hips from uke’s front line; place the right leg low across the direction of travel without bracing the knee or kicking uke’s shin.','Use uke’s step as the opportunity; the hands and body turn complete the throw.')
    ],'Do not freeze with the right leg stretched out while uke has regained balance.','ijf'),
    'ou-ko':guide('ou-ko','Right-sided sleeve/lapel grips; uke shifts weight to the other leg to escape O uchi.', ['Right foot: inner reap','Right foot: recover low','Right foot: short inner sweep'],[
      step('Attack the first leg','Use sleeve control and the lapel arm to threaten uke’s balance to the back.','Reap inside with the right leg while the left foot keeps your base stable.','Watch which foot receives uke’s weight.'),
      step('Change the target','Follow the torso instead of dragging uke by the sleeve.','Withdraw the right foot close to the floor; keep the stance compact as uke loads the other foot.','Do not pause long enough for a square reset.'),
      step('Sweep Ko uchi','Steer uke toward the newly weighted heel with controlled sleeve/lapel pressure.','Use the right foot for a short inside reap at the foot now carrying weight, rather than lunging from distance.','Attack at the instant of weight transfer.')
    ],'Do not sweep a foot that is airborne or unloaded.','ijf'),
    'ko-ou':guide('ko-ou','Right-sided standard grips. Uke steps back from a small inner reap.', ['Right foot: small inner touch','Right foot: recover','Right leg: deeper inner reap'],[
      step('Draw a response with Ko uchi','Keep sleeve contact and steer uke backward without bending at your waist.','Touch the inside of the advancing or supported foot with your right foot.','The first attack must make uke move or shift weight.'),
      step('Track the loaded leg','Let your hands follow the new backward corner.','Replace your right foot beneath you, then advance into the space between uke’s feet.','Uke settles onto the leg Ko uchi did not reach.'),
      step('Finish O uchi','Drive the shoulder line toward uke’s rear corner.','Use your right inner leg to reap the newly loaded support while the left leg holds your base.','Finish with the body, not an isolated leg swing.')
    ],'Avoid reaching far inside without moving your support foot.','kawamura'),
    'ko-seoi':guide('ko-seoi','Right vs right, conventional sleeve/lapel grips. Uke pulls the threatened foot back and comes forward.', ['Right foot: small inner reap','Right foot: plant across front','Left foot: close for pivot'],[
      step('Draw out the defense','Maintain left sleeve control and use right lapel hand to steer backward as you attack.','Make a short right-foot Ko uchi entry while the left support foot stays balanced.','Uke retracts the foot and often moves their chest forward.'),
      step('Turn beneath the sleeve','Draw the sleeve forward and in; bring the right elbow or arm into the correct Seoi configuration.','Recover the right foot into a forward entry/pivot position, then bring the left foot around as hips and shoulders turn.','Catch the forward recovery before uke squares their hips.'),
      step('Complete Seoi nage','Keep uke’s arm close and continue sleeve pull with your body turn.','Set feet beneath your hips, flex the knees, and keep a stable turning base.','Turn and extend through the throw without pulling uke across a disconnected arm.')
    ],'Do not attempt to lift uke with only your back after the footwork has stopped.','kawamura'),
    'ko-tai':guide('ko-tai','Right-side grips, moving uke. Ko uchi makes uke retreat and rebound forward.', ['Right foot: short inner reap','Both feet: recover square','Left foot: pivot · right leg: low line'],[
      step('Attack Ko uchi','Connect the left sleeve and right lapel to a short backwards off-balance.','Touch the loaded foot with the right inside foot, keeping your chest upright.','Expect uke to take the foot away.'),
      step('Redirect to the front corner','Draw the sleeve in front of you and rotate the lapel hand.','Recover the reaping foot and pivot without tangling your feet.','Uke re-steps forward after the initial defense.'),
      step('Turn into Tai otoshi','Keep both grips engaged through the turn.','Establish a stable support foot and place the right leg low along the entry line, never into the knee.','Turn your torso through the opened space as uke commits forward.')
    ],'Avoid using the extended leg as a rigid obstacle against uke’s planted knee.','kawamura'),
    'tai-ou':guide('tai-ou','Right Tai otoshi entry with right leg extending; uke steps backward or circles around it.', ['Right leg: body-drop line','Right foot: withdraw under hips','Right leg: inside reap'],[
      step('Threaten Tai otoshi','Drive the sleeve toward uke’s front corner and rotate the lapel side.','Pivot to the right-sided body-drop entry with an extended but relaxed right leg.','Uke braces, circles away, or shifts backward.'),
      step('Recover your base','Reverse your hand direction toward uke’s rear center as balance shifts.','Retract your right leg beneath you before changing direction; avoid twisting the left support knee.','You should face uke again before attacking the rear.'),
      step('Step into O uchi','Maintain connection with sleeve/lapel rather than pushing at the neck.','Advance the right foot into the inner reap line as uke plants their weight backward.','Reap only when the supporting leg is loaded.')
    ],'Do not leave your first attack leg caught behind uke while changing direction.','kawamura'),
    'ou-uchi':guide('ou-uchi','Right same-stance grips. Uke evades O uchi by stepping forward.', ['Right leg: inner reap','Right foot: return to turn-in base','Left foot: supporting pivot · right leg: Uchi mata'],[
      step('Threaten the rear','Use lapel pressure and sleeve control to make the inner reap credible.','Attack the inner support with your right leg and maintain balance through your left foot.','Uke moves the threatened leg clear and shifts forward.'),
      step('Turn on the recovery','Raise and draw the sleeve toward the forward corner with the lapel hand rotating.','Recover the right leg, then pivot the support foot into an Uchi mata entry with hips oriented toward uke.','Uke’s chest comes forward; do not wait for a stationary stance.'),
      step('Sweep Uchi mata','Rotate the upper body as one unit, with the sleeve guiding uke’s direction.','Balance on the support leg and swing the right leg up the inner thigh line without kicking at the knee.','Throw along uke’s forward trajectory.')
    ],'Avoid forcing Uchi mata when uke has already settled back onto both feet.','ijf'),
    'uchi-ou':guide('uchi-ou','Right Uchi mata on a cooperative stepping uke; follow their retreat or plant.', ['Left foot: support Uchi mata','Right sweeping leg: recover','Right leg: step inside for O uchi'],[
      step('Enter Uchi mata','Use sleeve and lapel to tip uke toward a forward corner.','Support on the left leg and lift/sweep with the right inner-thigh line.','Uke lowers their leg or steps back to avoid the forward throw.'),
      step('Rebalance safely','Change grip pressure from forward rotation to a backward shoulder line.','Bring the right sweeping foot back under you before stepping forward.','Uke places weight on the defending leg.'),
      step('Reap O uchi','Keep torso control and drive through the rear corner rather than relying on leg only.','Advance right foot inside uke’s stance and reap the newly weighted leg while left foot remains balanced.','Initiate as uke lands instead of after posture is fully restored.')
    ],'Do not chase the leg while still balanced on one foot.','kawamura'),
    'uchi-ko':guide('uchi-ko','Right Uchi mata forces a hop or protective step.', ['Left foot: Uchi mata pivot','Right sweeping foot: land close','Right foot: compact Ko uchi'],[
      step('Draw the forward response','Keep the sleeve stretched along uke’s moving front corner.','Use your left support and right Uchi mata leg with controlled range.','Uke hops sideways or plants the near foot.'),
      step('Land within reach','Maintain both grips; do not pull down on the head.','Set the right sweeping foot down close to the new support line, keeping left leg steady.','Look for the foot that is now weighted.'),
      step('Touch Ko uchi','Steer uke’s upper body over the weighted heel.','Use the right foot to make a small inward sweep at that support as the weight lands.','This is timing, not a forceful kick.')
    ],'If uke is no longer moving, reset rather than chase a distant heel.','kawamura'),
    'osoto-kosoto':guide('osoto-kosoto','Right outer reap is avoided by withdrawing its target leg.', ['Left foot: support outer reap','Right leg: recover from O soto','Right foot: short outer reap on other support'],[
      step('Commit to O soto','Maintain left sleeve traction and right lapel/upper chest control.','Plant the left foot alongside uke’s outside line and reap with the right leg.','Uke takes the attacked leg away.'),
      step('Redirect compactly','Keep shoulders moving toward uke’s rear corner.','Recover the right reaping foot beneath you; do not hop long distances to follow.','Find the remaining planted foot.'),
      step('Reap Ko soto','Hold the upper-body line to prevent upright recovery.','Use a smaller right-foot outer reap of the newly loaded foot.','Meet uke’s weight as it settles.')
    ],'Do not extend your legs so far that your hips lag behind your grips.','kawamura'),
    'osoto-harai':guide('osoto-harai','Right outside reap makes uke resist by driving forward.', ['Left foot: O soto support','Right leg: recover','Feet: turn-in for hip sweep'],[
      step('Attack backward with O soto','Keep sleeve control and right-side upper-body pressure.','Place left support outside uke’s leg and sweep back with the right leg.','Uke pushes forward or rotates the shoulders to stay standing.'),
      step('Turn with the pressure','Switch both hands to a drawing, lifting action toward uke’s front corner.','Recover the right sweep and turn feet and hips across uke’s front.','Enter before uke stops driving forward.'),
      step('Sweep Harai goshi','Keep the sleeve close enough to guide uke across your turning hips.','Establish safe hip contact and sweep along the leg line with the right leg while supported on the left.','The upper body and hips turn together; the leg follows the rotation.')
    ],'Do not attempt an extended leg sweep with no hip or upper-body connection.','ireland'),
    'hiza-osoto':guide('hiza-osoto','Right knee wheel makes uke step around the prop and load an outside foot.', ['Left foot: knee prop','Left foot: remove and base','Right leg: outside reap'],[
      step('Offer Hiza guruma','Use hands to draw uke around a corner rather than pulling straight down.','Use a light left-foot prop near the knee line, with right support foot balanced.','Uke steps around to avoid rotating.'),
      step('Get your foot clear','Redirect torso control toward uke’s rear shoulder line.','Remove the propping foot entirely and take a stable outside entry step.','Uke places weight onto the leg that escaped.'),
      step('Attack O soto','Connect sleeve and lapel while leaning through the shoulder line.','Set your outside support and reap behind the loaded leg with your right leg.','Attack as the weight lands, not after uke retreats again.')
    ],'Never trap or twist uke’s knee with the first prop.','kawamura'),
    'hiza-deashi':guide('hiza-deashi','Uke steps through a resisted knee wheel.', ['Left foot: light prop','Left foot: lower','Left foot: moving-foot sweep'],[
      step('Invite the step','Guide uke around with sleeve and lapel rather than using a stiff arm.','Touch near the knee line lightly with the left foot.','Uke advances or steps across to recover.'),
      step('Follow the foot','Keep the sleeve aligned with the forward direction of travel.','Withdraw the prop and bring your support feet underneath your hips.','Wait until uke’s moving foot is skimming the mat.'),
      step('Sweep De ashi','Turn hands in the direction of the step.','Sweep the advancing foot with a light, low contact from the side; do not kick the ankle.','Make contact before uke fully loads the leg.')
    ],'Sweeping a firmly planted foot makes this a kick, not a timed foot sweep.','kawamura'),
    'seoi-ko':guide('seoi-ko','Uke blocks a right shoulder throw by leaning back.', ['Right foot: turn-in','Feet: unwind to square','Right foot: small inner sweep'],[
      step('Enter Seoi nage','Keep uke’s sleeve connected to your turn and control the upper body.','Turn feet beneath hips in a genuine shoulder throw entry.','Uke moves or leans backward to defend.'),
      step('Face uke again','Turn grip pressure toward the rear corner as uke retreats.','Unwind your entry; bring feet under you without crossing or twisting the support knee.','Identify the foot that takes uke’s backward weight.'),
      step('Reap Ko uchi','Steer the shoulder line over the backward support.','Attack that planted foot with a short right-foot inner reap.','Timing matters more than sweeping force.')
    ],'Avoid twisting the planted leg while turning back toward uke.','toronto'),
    'osoto-ouchi':guide('osoto-ouchi','Right outer reap forces uke to withdraw and plant the opposite leg.', ['Right leg: outer reap','Right foot: recover','Right leg: inside reap'],[
      step('Commit to the outer line','Use left sleeve grip and right lapel hand to break uke’s balance backward.','Step left outside and reap with your right leg.','Uke removes the leg you are sweeping.'),
      step('Find the other support','Follow uke’s weight transfer with connected grips.','Recover right foot to a neutral base, then step inside the new support line.','The far leg becomes planted.'),
      step('Finish inner reap','Redirect pressure into uke’s back corner without wrenching a shoulder.','Use a deep but balanced right inner reap while left foot supports.','Attack while the far foot carries weight.')
    ],'Do not remain sideways after the first O soto attempt.','ireland'),
    'tai-uchi':guide('tai-uchi','Uke steps around the body drop, leaving a forward thigh exposed.', ['Right leg: Tai otoshi line','Right foot: recover','Left leg: support · right leg: Uchi mata'],[
      step('Threaten Tai otoshi','Use sleeve and lapel to lead uke toward a front corner.','Place the right leg along a safe body-drop line.','Uke circles around your extended leg.'),
      step('Reposition for Uchi mata','Maintain the forward rotational force with both hands.','Retract the right leg and reposition your left supporting foot on the new turning line.','Follow uke’s stepping escape, not a stationary stance.'),
      step('Sweep the inner thigh','Keep posture tall through the sleeve and lapel connection.','Support through the left foot and lift the right leg through uke’s inner thigh line.','Rotate the body with uke’s moving center.')
    ],'Do not try to sweep while standing too far from uke’s hip line.','wazabook'),
    'tai-seoi':guide('tai-seoi','Uke posts forward against a body-drop entry.', ['Right leg: extended Tai line','Right foot: recover','Feet: turn together for shoulder throw'],[
      step('Invite the post','Keep grips connected as you threaten the front corner.','Pivot into a sincere Tai otoshi entry.','Uke steps or braces forward to stay upright.'),
      step('Re-enter underneath','Retain sleeve control and guide uke’s elbow toward your shoulder position.','Withdraw the extended leg fully; turn both feet to face the same new throwing direction.','Move while uke’s chest is over their toes.'),
      step('Finish Seoi nage','Use the shoulders, sleeve and legs together.','Flex knees with feet beneath your hips to support the turn.','Complete only with safe partner control and ukemi.')
    ],'Do not bend your back into uke without first adjusting your feet.','ireland'),
    'ko-osoto':guide('ko-osoto','Uke takes foot away from inside sweep and settles on an outside support.', ['Right foot: inner touch','Right foot: recover','Left foot: outside step · right leg: reap'],[
      step('Start inside','Keep uke moving with conventional grips.','Make a small Ko uchi touch with your right foot.','Uke retreats to protect the foot.'),
      step('Step outside','Turn the torso pressure toward uke’s rear outside corner.','Recover your right foot and take the left support step outside uke’s loaded leg.','Stay close; do not lunge from too far away.'),
      step('Reap O soto','Keep the lapel-side shoulder pressure aligned behind uke’s base.','Use the right leg to reap backward along the support leg line while the left foot stays firm.','Finish only when balance is broken backward.')
    ],'Do not kick at the calf while your upper body stays distant.','kawamura')
  };
  return {guides, get(id){return guides[id]||null;}, count:Object.keys(guides).length};
})();
