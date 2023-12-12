//
//  CustomEventEmitter.m
//  nanhaishop
//
//  Created by 林宇智 on 2023/12/1.
//

#import "CustomEventEmitter.h"

@implementation CustomEventEmitter
static int VersionType = 0;

// 注册模块
RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
  // 如果您的模块不需要访问主线程（例如，不进行 UI 操作），返回 NO
  return NO;
}
// 列出所有支持的事件
- (NSArray<NSString *> *)supportedEvents {
    return @[@"eventFromiOS"]; // 这里添加您的事件名称
}

- (void) methodThatSendsEvent{
  [self sendEventWithName:@"eventFromiOS" body:@{@"key": @"value"}];
}
- (NSDictionary *)constantsToExport {
    NSInteger versionType = 0;

    #ifdef huarayRelease
        versionType = 1;
        NSLog(@"huarayRelease is defined");
    #elif nanhaiRelease
        versionType = 2;
        NSLog(@"nanhaiRelease is defined");
    #else
        versionType = 0;
        NSLog(@"Neither huarayRelease nor nanhaiRelease is defined");
    #endif
    NSNumber *myNumber = [NSNumber numberWithInteger:versionType];

    return @{@"VersionType": myNumber};
}

@end
