import Subscription from "../models/subscription.model.js";

// Create a new subscription
export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: { subscription } });
  } catch (e) {
    next(e);
  }
};

// Get all subscriptions of a specific user
export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user._id.toString() !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.statusCode = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};

// Get all subscriptions (admin or user-specific)
export const getAllSubscriptions = async (req, res, next) => {
  try {
    // Optional: filter by user for non-admins
    const subscriptions = await Subscription.find();
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};

// Get subscription by ID
export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.subscriptionId);

    if (!subscription) {
      const error = new Error("Subscription not found");
      error.statusCode = 404;
      throw error;
    }

    // Check ownership
    if (subscription.user.toString() !== req.user._id.toString()) {
      const error = new Error("You are not the owner of this subscription");
      error.statusCode = 401;
      throw error;
    }

    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

// Update subscription by ID
export const updateSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.subscriptionId);

    if (!subscription) {
      const error = new Error("Subscription not found");
      error.statusCode = 404;
      throw error;
    }

    // Ownership check
    if (subscription.user.toString() !== req.user._id.toString()) {
      const error = new Error("Unauthorized to update this subscription");
      error.statusCode = 401;
      throw error;
    }

    const updatedSubscription = await Subscription.findByIdAndUpdate(
      req.params.subscriptionId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Subscription updated successfully",
      data: updatedSubscription,
    });
  } catch (error) {
    next(error);
  }
};

// Delete subscription by ID
export const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.subscriptionId);

    if (!subscription) {
      const error = new Error("Subscription not found");
      error.statusCode = 404;
      throw error;
    }

    // Ownership check
    if (subscription.user.toString() !== req.user._id.toString()) {
      const error = new Error("Unauthorized to delete this subscription");
      error.statusCode = 401;
      throw error;
    }

    await subscription.deleteOne();

    res.status(200).json({
      success: true,
      message: "Subscription removed successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};
