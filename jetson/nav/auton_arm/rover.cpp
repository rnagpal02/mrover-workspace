#include <iostream>
#include "rover.hpp"

// Constructs a rover object with the given configuration file and lcm
// object with which to use for communications.
Rover::Rover( lcm::LCM& lcmObject )
    : mLcmObject( lcmObject ) { }

Rover::RoverStatus::RoverStatus() : mCurrentState(AutonArmState::WaitingForTag) {
    mAutonState.is_auton = true;
}

AutonArmState& Rover::RoverStatus::currentState() {
    return mCurrentState;
} //currentState()

AutonState& Rover::RoverStatus::autonState() {
    return mAutonState;
} //autonState()

TargetPositionList& Rover::RoverStatus::targetList() {
    return mTargetList;
} //target()

bool Rover::updateRover(RoverStatus newRoverStatus) {
    // Rover currently on.
    if( mRoverStatus.autonState().is_auton )
    {
        // Rover turned off
        if( !newRoverStatus.autonState().is_auton )
        {
            mRoverStatus.autonState() = newRoverStatus.autonState();
            return true;
        }

        return false;
    }

    // Rover currently off.
    else
    {
        // Rover turned on.
        if( newRoverStatus.autonState().is_auton )
        {
            mRoverStatus = newRoverStatus;
            return true;
        }
        return false;
    }
    return false;
} //updateRover(newRoverStatus)

Rover::RoverStatus& Rover::roverStatus() {
    return mRoverStatus;
}