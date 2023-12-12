//
//  EnvironmentModule.m
//  nanhaishop
//
//  Created by 林宇智 on 2023/11/30.
//
// Objective-C 示例
#import <React/RCTBridgeModule.h>

@interface EnvironmentModule : NSObject <RCTBridgeModule>
@end

@implementation EnvironmentModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getBuildConfiguration:(RCTResponseSenderBlock)callback)
{
  #ifdef DEBUG
    NSString *config = @"Debug";
  #elif STAGING
    NSString *config = @"huarayRelease";
  #else
    NSString *config = @"nanhaiRelease";
  #endif
  callback(@[[NSNull null], config]);
}

@end
